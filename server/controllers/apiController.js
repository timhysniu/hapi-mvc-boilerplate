"use strict"

const Mongoose = require('mongoose');

module.exports = function (server) {

    let api = {};

    api.getUser = function() {
        return {
            first_name: "John",
            last_name: "Smith"
        };
    };

    api.saveUser = function() {
        var newUser = new server.models.user({ first_name: 'Jim', 'last_name': 'Smith' });

        newUser.save(function (err, user) {
            if (err) {
                return handleError(err);
            }
            console.dir(user);
        });

        return true;
    };

    return api;
};
