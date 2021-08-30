const Joi = require('joi');


const RegValidation = (body) => {

    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {
                    allow: ['com', 'net']
                }
            }),

        phone: Joi.string()
            .min(6)
            .max(15)
            .required(),
    })

    return validation = schema.validate({
        name: body.name,
        password: body.password,
        email: body.email,
        phone: body.phone
    });
    
}

const LogValidation = (body) => {

    const schema = Joi.object({

        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {
                    allow: ['com', 'net']
                }
            }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    })
    return validation = schema.validate({
        email: body.email,
        password: body.password,
    });
}

module.exports.RegValidation = RegValidation;
module.exports.LogValidation = LogValidation;