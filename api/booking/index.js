'use strict';

var express = require('express'),
    cors = require('cors'),
    router = express.Router(),
    Logger = require('le_node');

var BookingModel = require('../../models/booking');

var logger = new Logger({
    token: '0bded162-f6b7-47fc-aad4-372f9cb522b3'
});

router.post('/',cors(), function(req,res){
    var model = new BookingModel();

    model.coachId  = "dzoaij";
    model.date = new Date();
    model.maxParticipant = 1;
    model.name = "hello";

    model.save(function(err){
        if(err){
            logger.error('an error occured when saving booking', err);
        }
    })
});

module.exports = router;