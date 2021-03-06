var express = require('express');
var router = express.Router();
var applicants = require('../models/applicants-sqlite3');


router.get('/', function(req, res, next){
	applicants.applicant_list()
	.then(applicant_list => {
		var idPromises = [];
		for (var id of applicant_list){
			
			idPromises.push(
				applicants.read(id.id)
				.then(applicant => {
					return {id: applicant.id, full_name: applicant.full_name, 
						summary:applicant.summary, languages: applicant.languages,
						employer:applicant.company};
				})
			);
		}
		
		return Promise.all(idPromises);
	})
	.then(applicant_list => {

		res.render('index', {title: 'Applicants', applicant_list:applicant_list});
	})
	.catch(err => { next(err); });
});

module.exports = router;






/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Job Applicants', applicants: applicants});
});

module.exports = router;
*/


