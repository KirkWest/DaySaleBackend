const mongoose = require('mongoose');


// Connects to cloud atlas mongo database
async function databaseConnect(){
	try { 
		console.log("Connecting to:\n" + process.env.DB_URI);
		await mongoose.connect(process.env.DB_URI, {
			dbName: 'DaySale',
		});
		console.log("Database connected");
	} catch (error) {
		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
	}
}

module.exports = {
	databaseConnect
}