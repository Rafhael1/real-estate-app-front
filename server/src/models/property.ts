import mongoose from 'mongoose'

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true, default: "N/A" },
    description: { type: String, required: true, default: "Not Sheeeeesh" },
    adress: { type: String, required: false, },
    country: { type: String, required: false, },
    price: { type: Number, required: true, default: 0},
    status: { type: String, required: false, },
    images: { type: String, required: true, },
    
});

// Status: For sale, rent, under construction, Sold out

const model = mongoose.model('Property', PropertySchema);

module.exports = model;