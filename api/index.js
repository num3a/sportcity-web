'use strict';

var express = require('express'),
    router = express.Router();

    router.get('/healthcheck', function(req,res){
        res.send({status: 'OK'});

    });

module.exports = router;