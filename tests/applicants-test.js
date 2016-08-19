'use strict;'

var request = require('supertest');
var app = require('../app');
var model = require('../models/applicants-sqlite3')

describe('GET the homepage', function(){
	it('response is successful', function(done){
		request(app)
		.get('/')
		.expect(200, done)
	})

});
