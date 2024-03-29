// ======================================================
// Person Main controller ===============================
// ======================================================
var PersonController = exports;


//--------------------------------------- Module dependencies.
var mongoose 	= require('mongoose'),
    Person 		= mongoose.model('Person'),
    Address     = mongoose.model('Address'),
    moment      = require('moment'),
    Util        = require('../helpers/appUtils');

/**
 * Load all people
 * @param req
 * @param res
 */
PersonController.getAll = function(req, res){

    Util.info('Load all people');

    Person.find(null, function(err, results){
        if(err){
            res.status(400).json({message : "Error Loading Person"})
        }else{
            res.status(200).json(results)
        }
    })
};