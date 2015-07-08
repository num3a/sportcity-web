var BookingModel = require('../../models/booking');

module.exports = function(router){

    var model = new BookingModel();

    router.get('/api/booking', function(req,res){
        res.send({hello: 'world'});

    });
};