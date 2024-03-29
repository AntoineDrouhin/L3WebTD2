'use strict';

module.exports = {

    // ---- Main app configuration
    app: {
        name        : 'TD 4 - My Resume',
        url         : 'http://localhost:3000/',
        type        : 'Development',
        version     : 'TD4.0'
    },

    // ---- Database configuration
    db	: {
        module  : 'mongoDB',
        link      : "mongodb://163.172.150.53:27017/td2"
    }

    // ---- Params Allowed Origins by environment
    //allowedOrigins : [ 'localhost:*', '0.0.0.0:*','128.0.0.150:*'],
};

