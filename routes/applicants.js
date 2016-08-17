'use strict';

var util = require('util');
var express = require('express');
var router = express.Router();
var applicants = require('../models/applicants-sqlite3');




router.get('/view', (req, res, next) => {
	
	applicants.read(req.query.id)
	.then(applicant => {
		res.render('applicant', {
			title : applicant ? applicant.full_name : '',
			applicant_id : req.query.id,
			applicant: applicant
		});
	})
	.catch(err => { next(err); });
});

module.exports = router;
