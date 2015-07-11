'use strict';

var express = require('express'),
    cors = require('cors'),
    router = express.Router();

    router.get('/healthcheck',cors(), function(req,res){
        res.send({status: 'OK'});

    });

router.get('/', function(req,res){
    res.send({status: 'OK'});

});


module.exports = router;