'use strict';
var mongoose = require('mongoose'),
    moment = require('moment');

var chatMessagesModel = function () {

    var chatMessageSchema = mongoose.Schema({
        text: String,
        date: { type: Date, default: Date.now },
        senderId: String
    });

    return mongoose.model('ChatMessages', chatMessageSchema);
};

module.exports = new chatMessagesModel();
