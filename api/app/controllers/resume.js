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

    Resume.find(null,function(err, cvs){
        if(err){
            res.status(400).json({message : "Error" });
        }else{
            res.status(200).json(cvs);
        }
    });
};

ResumeController.getResume = function(req, res) {

    Util.info('Load a resume');

    Resume.findById(req.params.id, function (err, cvs) {
        if(err){
            res.status(400).json({message : "Error"})
        }else{
            res.status(200).json(cvs);
        }
    });
};

