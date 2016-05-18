/**
 * Created by aureliengarret on 18/05/2016.
 */
module.exports = function(router) {
    //------ LOAD CONTROLLER
    // --> No controller | just information

    var path = require('path'),
        Util = require('../helpers/appUtils');
    personCtrl = require('../controllers/person.js');

    // --------------------------------------------------------------------------------------------------------------
    //                                                                                                  VERSION API
    // --------------------------------------------------------------------------------------------------------------

    router.get('/person', function(req, res){
        Util.info('Load API information');
        personCtrl.getAll(req, res);
    });


};