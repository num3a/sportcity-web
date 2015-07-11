'use strict';


var express = require('express'),
    cors = require('cors'),
    kraken = require('kraken-js'),
    app = express(),
    options = require('./lib/spec')(app),
    userLib = require('./lib/user')(),
    port = process.env.PORT || 8000,
    api = require('./api');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.use('/api',api);
app.use(kraken(options));

app.listen(port, function(err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});
