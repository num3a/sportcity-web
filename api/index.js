'use strict';

var express = require('express'),
    router = express.Router();

    router.get('/helloworld', function(req,res){
        res.send({hello: 'world'});

    });

module.exports = router;