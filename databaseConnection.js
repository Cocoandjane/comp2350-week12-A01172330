const database = require("mongoose");

const is_heroku = process.env.IS_HEROKU || false;

const databaseName = "lab_example"

const herokuURI = "mongodb+srv://janeral:bcitdb@cluster0.gi0kw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const localURI =
	"mongodb://localhost/" + databaseName + "?authSource=admin&retryWrites=true"

if (is_heroku) {
	database.connect(herokuURI, { useNewUrlParser: true, useUnifiedTopology: true });
} else {
}
database.connect(localURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = database;
