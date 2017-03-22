/*
// this is where the items will be called to/from the database
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GrocerySchema = new Schema({

	string: {
		type: String,
		trim: true,
		required: "String is required"
	},
	number: { // this should become currency if I have time
		type: Number,
		required: true
	}
});

var Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery;
*/