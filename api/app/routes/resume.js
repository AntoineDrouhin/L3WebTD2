/**
 * Created by aureliengarret on 17/05/2016.
 */
module.exports = function(router) {
    //------ LOAD CONTROLLER
    // --> No controller | just information

    var path = require('path'),
        Util = require('../helpers/appUtils');
        resumeCtrl = require('../controllers/resume.js');

    // --------------------------------------------------------------------------------------------------------------
    //                                                                                                  VERSION API
    // --------------------------------------------------------------------------------------------------------------
    // -------- HOMEPAGE
    router.get('/resume/:id', function(req, res){
        Util.info('Load API information');
        console.log("Id resume needed : " + req.params.id);
        resumeCtrl.getResume(req, res);
    });

/*    router.param('id',function(req,res,next,id){
        req.id = id;

        next();
    })*/

};