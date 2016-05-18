/**
 * Created by aureliengarret on 18/05/2016.
 */
/**
 * Created by aureliengarret on 18/05/2016.
 */
module.exports = function(router) {
    //------ LOAD CONTROLLER
    // --> No controller | just information

    var path = require('path'),
        Util = require('../helpers/appUtils');
    addressCtrl = require('../controllers/address.js');

    // --------------------------------------------------------------------------------------------------------------
    //                                                                                                  VERSION API
    // --------------------------------------------------------------------------------------------------------------

    router.get('/address', function(req, res){
        Util.info('Load API information');
        addressCtrl.getAll(req, res);
    });


};