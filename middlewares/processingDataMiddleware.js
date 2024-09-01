const asyncHandler = require('express-async-handler');


const processingData = asyncHandler( (req, res, next) => {
    
    let BMR;
    const activityList = new Map();

    activityList.set('low', 1.2);
    activityList.set('medium', 1.55);
    activityList.set('high', 1.72);
    const {
        age,
        gender,
        weight,
        height,
        activity,
    } = req.body;

    if (gender === 'male') {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    const caloriesNeeded = BMR * activityList.get(activity);
    const waterNeeded = 0.035 * weight;
    req.body.caloriesNeeded = Math.ceil(caloriesNeeded);
    req.body.waterNeeded = parseFloat(waterNeeded.toFixed(1)*1000);
    req.body.userId = req.user.id;
    next();
    
});

module.exports = processingData;
