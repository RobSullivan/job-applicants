'use strict';

const util = require('util');
const sqlite3 = require('sqlite3');

const log = require('debug')('applicants:sqlite3-model')

const Applicant = require('./Applicant');

sqlite3.verbose();
var db;

exports.connectDB = function(){
	return new Promise((resolve, reject) =>{
		if (db) return resolve(db);
		var dbfile = process.env.SQLITE_FILE || 'applicant.sqlite3';
		db = new sqlite3.Database(dbfile,
			sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
			err => {
				if (err) reject(err);
				else{
					console.log('Opened SQLite3 database ' + dbfile);
					resolve(db)
				}
			});
	});
};


exports.read = function(id){
	return exports.connectDB().then(() => {
		return new Promise((resolve, reject) => {
			db.get("SELECT * FROM applicants WHERE id = ?;", [id], (err, row) => {
				if(err) reject(err);
				else if (!row){
					reject(new Error("No applicant found for "+id))
				}
				else{
					var applicant = new Applicant(row.id, row.full_name,
												row.summary);
					resolve(applicant)
				}
			});
		});
	});
};

exports.applicant_list = function(){
	return exports.connectDB().then(() =>{
		return new Promise((resolve, reject) => {
			var idz = [];
			db.each("SELECT * FROM applicants;", 
				(err, row) => {
					if(err) reject(err);
					else idz.push({id: row.id, full_name:row.full_name});
				},
				(err, num) => {
					if (err) reject(err);
					else resolve(idz);
				});
		});
	});
};

