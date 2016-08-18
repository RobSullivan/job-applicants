'use strict';

module.exports = class Applicant {
	constructor(id, full_name, summary, languages, company, email){
		this.id = id;
		this.full_name = full_name;
		this.summary = summary;
		this.languages = languages;
		this.company = company;
		this.email = email
	}
};



