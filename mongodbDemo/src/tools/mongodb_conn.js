const mongoose = require('mongoose');
const connection = mongoose.connection;

mongoose.connect('mongodb://localhost/tests', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

connection.on('error', () => {
	console.log(`connection error...`)
});
connection.once('open', () => {
	console.log(`connection open...`);
});
