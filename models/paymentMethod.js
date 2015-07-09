'use strict';
var mongoose = require('mongoose'),
    moment = require('moment');

var paymentMethodModel = function () {

    var paymentMethodSchema = mongoose.Schema({
        name: String,
        date: { type: Date, default: Date.now },
        coachId: String,
        maxParticipant : Number
    });

    return mongoose.model('PaymentMethod', paymentMethodSchema);
};

module.exports = new paymentMethodModel();
