"use strict"

const Mongoose = require('mongoose');

module.exports = function (server) {
    let db = server.db;

    var userSchema = new Mongoose.Schema({
        first_name : { type: String, required: true, trim: true },
        last_name: { type: String, required: true, trim: true }
    });

    return db.model('user', userSchema);
};
