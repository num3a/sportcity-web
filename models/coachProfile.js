'use strict';
var mongoose = require('mongoose'),
    moment = require('moment');

var coachProfileModel = function () {

    var coachProfileModel = mongoose.Schema({
        activities : {type : [String], required : true},
        diplomas : [String]
    });


    /*
     var coach =
     {
     id: i,
     firstName: "Robert",
     lastName : "Henry",
     activity : "Running",
     image : 'img/fake/coach-1.jpg'
     };
     */

    coachProfileModel.index({location: '2dsphere'});

    return mongoose.model('CoachProfile', coachProfileModel);
};

module.exports = new coachProfileModel();
