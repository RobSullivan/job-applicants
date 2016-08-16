var sqlite3 = require('sqlite3');
sqlite3.verbose();

var db = undefined;

exports.connect = function(dbname, callback){
	db = new sqlite3.Database(dbname, 
		sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
	function(err){
		if (err)
			callback(err);
		else
			callback(db);
	}
	);
}

exports.disconnect = function(callback){
	callback();
}

exports.create = function(id, full_name, summary, callback){
	db.run("INSERT INTO applicants (id, full_name, summary) VALUES (?, ?, ?)",
	[id, full_name, summary], 
	function(err){
		if (err)
			callback(err);
		else
			callback();
	})
}

exports.update = function(id, full_name, summary, callback){
	db.run("UPDATE applicants SET id = ?, full_name = ?, summary = ?;",
		[id, full_name, summary],
		function(err){
			if (err)
				callback(err);
			else
				callback();
		})
}

exports.applicants = function(callback){
	var applicants = [];
	db.each("SELECT id, full_name, summary FROM applicants;",
		function(err, row){
			if (err)
				callback(err);
			else applicants.push({
				key: row.id, full_name: row.full_name,
				summary: row.summary
			});
		},
		function(err, num){
			if(err)
				callback(err);
			else
				callback(null, applicants);
		})
}

