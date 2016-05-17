/**
 * Created by Geoffrey on 17/05/2016.
 */
// ======================================================
// Resume Main controller ===============================
// ======================================================
var ResumeController = exports;


//--------------------------------------- Module dependencies.
var mongoose 	= require('mongoose'),
    Resume 		= mongoose.model('Resume'),
    moment      = require('moment'),
    Util        = require('../helpers/appUtils');

/**
 * Load all resume
 * @param req
 * @param res
 */
ResumeController.getAll = function(req, res){

    Util.info('Load all resume');

    Resume.find({}).populate('person').exec(function(err, results){
        if(err){
            res.status(400).json({message : "Error Loading Resume"})
        }else{
            res.status(200).json(results)
        }
    })
};

