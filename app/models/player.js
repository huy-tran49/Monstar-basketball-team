const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		injured: {
			type: Boolean,
		},
		age: {
			type: Number,
			required: true,
		},
		number: {
			type: Number,
			required: true,
		},
		agent: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Player', playerSchema)
