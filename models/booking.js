'use strict';
var mongoose = require('mongoose'),
    moment = require('moment');

var bookingModel = function () {

    var bookingSchema = mongoose.Schema({
        name: String,
        date: { type: Date, default: Date.now },
        coachId: String,
        maxParticipant : Number,

    });

    return mongoose.model('Booking', bookingSchema);
};

module.exports = new bookingModel();
