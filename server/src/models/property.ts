import mongoose from "mongoose"

const PropertySchema = new mongoose.Schema({
	title: { type: String, required: true, },
	description: { type: String, required: false, },
	squareMeter: { type: String, required: false },
	adress: { type: String, required: false, },
	country: { type: String, required: true, },
	price: { type: String, required: true, },
	status: { type: String, required: false, },
	images: { type: [String], required: true, },
	user: {
		id: { type:  String, required: true },
		email: { type: String, required: true },
		phone: { type: String, required: false }
	},
	date: {
		type: Date,
		default: Date.now
	},
	clicks: { type: Number, required: false, default: 0  }
})

// Status: For sale, rent, under construction, Sold out

const model = mongoose.model("Property", PropertySchema)

export default model