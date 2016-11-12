"use strict"

const Joi = require('joi');

module.exports = function (controller) {
    return [
        {
            method: 'GET',
            path: '/api/user/{user_id}',
            config: {
                handler: function(request, reply) {
                    let user = controller.getUser();
                    reply(user);
                },
                description: 'Get user by id',
                notes: 'Returns a user by id',
                tags: ['api'],
                validate: {
                    params: {
                        user_id: Joi.number()
                            .required()
                            .description('the id for the user'),
                    }
                }
            }
        },
        {
            method: 'GET',
            path: '/api/user/save',
            config: {
                handler: function(request, reply) {
                    var success = controller.saveUser();
                    reply({ success: 1});
                },
                description: 'Create a user',
                notes: 'Creates a new user',
                tags: ['api']
            }
        }
    ];
};
