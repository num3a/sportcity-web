'use strict';
var mongoose = require('mongoose'),
    moment = require('moment');

var chatModel = function () {

    var chatSchema = mongoose.Schema({
        name: String,
        creationDate: { type: Date, default: Date.now },
        coachId: String
    });

    return mongoose.model('Chat', chatSchema);
};

module.exports = new chatModel();
/**
 * Created by emmanuelernest on 09/07/15.
 */
