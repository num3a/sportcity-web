'use strict';

var express = require('express'),
    cors = require('cors'),
    router = express.Router(),
    Logger = require('le_node');


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

router.post('/book',function(req,res){
    console.log('post ok');
    res.send({status: 'OK'});
});

router.use('/booking', booking);

module.exports = router;