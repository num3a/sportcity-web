'use strict';

var express = require('express'),
    cors = require('cors'),
    router = express.Router(),
    Logger = require('le_node');

var BookingModel = require('../../models/booking');

var logger = new Logger({
    token: '0bded162-f6b7-47fc-aad4-372f9cb522b3'
});

router.get('/', cors(), function(req, res){
    return BookingModel.find(function(err, bookings){
        if(!err){
            return res.send(bookings);
        }else{
            return logger.error(err);
        }
    });
});

router.post('/',cors(), function(req,res){
    var booking = new BookingModel();

    logger.info('POST: ', req.body);

    booking.coachId  = req.body.coachId;
    booking.date = req.body.date;
    booking.maxParticipant = req.body.maxParticipant;
    booking.name = req.body.name;
    booking.location = [10,10];

    booking.save(function(err){
        if(!err){
            return logger.info('booking added');
        }
        else{
            return logger.error('an error occured when saving booking', err);
        }
    });

    return res.send(booking);
});

router.get('/:id', cors(),function(req,res){
    return BookingModel.findById(req.params.id, function(err,booking){

        if(!err){
            return res.send(booking);
        }
        else{
            return logger.error(err);
        }
    });
});

router.put('/:id',cors(), function(req,res){
    return BookingModel.findById(req.params.id, function(err,booking){
        if (!req.body) return res.sendStatus(400);

        if(err){
            logger.info('An error occured when updating booking', booking);
            res.send(err);
        }

        booking.coachId  = req.body.coachId;
        booking.date = req.body.date;
        booking.maxParticipant = req.body.maxParticipant;
        booking.name = req.body.name;
        booking.location = [10,10];

        return booking.save(function(err){
            if(!err){
                logger.info('Booking updated', booking);
            }
            else {
                logger.error(err);
            }
            return res.send(booking);
        });


    });
});

router.delete('/:id',cors(),function(req,res){
    return BookingModel.findById(req.params.id, function (err, booking) {
        return booking.remove(function (err) {
            if (!err) {
                logger.info("Booking removed", booking);
                return res.send('');
            } else {
                console.log(err);
            }
        });
    });
});

module.exports = router;