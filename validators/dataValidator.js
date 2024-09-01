const slugify = require('slugify');
const { check } = require('express-validator');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const User = require('../models/userModel');

exports.collectDataValidator = [
    check('gender')
        .notEmpty()
        .withMessage('gender required'),

    check('weight')
        .isNumeric()
        .notEmpty()
        .withMessage('weight required'),

    check('height')
        .isNumeric()
        .notEmpty()
        .withMessage('height required')
        ,

    check('age')
        .isNumeric()
        .notEmpty()
        .withMessage('age required'),
    
    check('activity')
        .notEmpty()
        .withMessage('activity required'),

    validatorMiddleware,
];

exports.loginValidator = [
    check('email')
        .notEmpty()
        .withMessage('Email required')
        .isEmail()
        .withMessage('Invalid email address'),

    check('password')
        .notEmpty()
        .withMessage('Password required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),

    validatorMiddleware,
];
