/**
 * Created by Geoffrey on 17/05/2016.
 */
//------ Model USER
'use strict';

//--- Module dependencies
var mongoose 	= require('mongoose'),
    Schema	 	= mongoose.Schema;

//------------------------------------------- Person Schema
var ResumeSchema;
ResumeSchema = new Schema({

    person: {type: Schema.Types.ObjectId, ref: 'Person'},

    title: String,

    experiences: [{
        start: String,
        end: String,
        title: String,
        company: String,
        location: String,
        description: [String]
    }],
    educations: [{
        start: String,
        end: String,
        title: String,
        school: String,
        location: String,
        description: [String]
    }],
    hobbies: [{
        typeo: String,
        content:[{
            label: String,
            detail: String
        }]
    }],
    competencies: [{
        typeo: String,
        content:[{
            label: String,
            level: String
        }]
    }],

    extra:  String
    

});

mongoose.model('Resume', ResumeSchema);