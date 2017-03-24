var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({

		string: {
			type: String,
			trim: true,
			required: "String is required."

},

		number: {
			type: Number,
			unique: true,
			required: true

		},

		email: {
			type: String,
			match: [/.+\@.+\..+/, "Please enter a valid email"]
		},

		boolean: Boolean,
		array: Array,

		date: {
			type: Date,
			default: Date.now
		},

		longstring: {
			type: String,
			validate: [

				function(input) {
					return input.length >= 6;

				},

				"Longstring should be longer."
				]
			}


	})
// this create a model from the above schema
var Book = mongoose.model('Book', BookSchema);

module.exports = Book;