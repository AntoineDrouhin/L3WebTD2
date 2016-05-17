/**
 * Created by aureliengarret on 17/05/2016.
 */
module.exports = function(router) {
    //------ LOAD CONTROLLER
    // --> No controller | just information

    var path = require('path'),
        Util = require('../helpers/appUtils');

    // --------------------------------------------------------------------------------------------------------------
    //                                                                                                  VERSION API
    // --------------------------------------------------------------------------------------------------------------
    // -------- HOMEPAGE
    router.get('/resume/:id', function(req, res){
        Util.info('Load API information');
        console.log("Id resume needed : " + req.id)
        res.status(200).json(global.config.app);
    });

    router.param('id',function(req,res,next,id){
        req.id = id;

        next()
    })

};