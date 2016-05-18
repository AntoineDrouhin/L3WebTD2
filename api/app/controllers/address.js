/**
 * Created by aureliengarret on 18/05/2016.
 */
// ======================================================
// Address Main controller ===============================
// ======================================================
var AddressController = exports;


//--------------------------------------- Module dependencies.
var mongoose 	= require('mongoose'),
    Address     = mongoose.model('Address'),
    moment      = require('moment'),
    Util        = require('../helpers/appUtils');

/**
 * Load all people
 * @param req
 * @param res
 */
AddressController.getAll = function(req, res){

    Util.info('Load all people');

    Address.find(null, function(err, results){
        if(err){
            res.status(400).json({message : "Error Loading Address"})
        }else{
            res.status(200).json(results)
        }
    })
};