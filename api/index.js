'use strict';

var express = require('express'),
    cors = require('cors'),
    router = express.Router(),
    Logger = require('le_node'),
    bodyParser = require('body-parser');


var booking = require('./booking');

var logger = new Logger({
    token: '0bded162-f6b7-47fc-aad4-372f9cb522b3'
});

    router.get('/healthcheck',cors(), function(req,res){

    var healthcheck = {status: 'OK'};
    logger.info('Sportcity api is up', healthcheck);
        res.send(healthcheck);

    });

router.get('/', function(req,res){
    res.send({status: 'OK'});

});

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.use('/booking', booking);

module.exports = router;