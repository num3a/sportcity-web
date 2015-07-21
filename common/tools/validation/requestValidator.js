'use strict';

var checkRequestBody = function(req,res){
    if (!req.body) {
        return res.sendStatus(400);
    }
};

module.exports = {
    checkRequestBody : checkRequestBody
};