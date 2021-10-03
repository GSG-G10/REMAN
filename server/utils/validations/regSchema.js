const Joi= require('joi');
const {JoiPassword} = require('joi-password');

const regSchema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: JoiPassword.string()
    .minOfLowercase(1)
    .minOfNumeric(1)
    .minOfUppercase(1)
    .minOfSpecialCharacters(1)
    .required(),
    confirmPassword: Joi.ref('password'),
});

module.exports= {regSchema};