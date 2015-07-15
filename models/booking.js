'use strict';
var mongoose = require('mongoose'),
    moment = require('moment');

var bookingModel = function () {

    var bookingSchema = mongoose.Schema({
        name: {type : String, required: true},
        date: { type: Date, default: Date.now },
        coachId: {type : String, required: true},
        coachName : {type : String, required: true},
        durationInMinutes : { type: Number , required: true},
        price : { type: Number , required: true},
        maxParticipant : {type : Number, required : true},
        location: { type: [Number], required: true }

    });

    bookingSchema.index({location: '2dsphere'});

    return mongoose.model('Booking', bookingSchema);
};

module.exports = new bookingModel();
