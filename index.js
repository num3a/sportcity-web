'use strict';


var express = require('express'),
    kraken = require('kraken-js'),
    app = express(),
    options = require('./lib/spec')(app),
    userLib = require('./lib/user')(),
    port = process.env.PORT || 8000,
    api = express.Router();


app.use('/api',api);
app.use(kraken(options));

app.listen(port, function(err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});
