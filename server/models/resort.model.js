const mongoose = require('mongoose');
const Schema = new mongoose.Schema;
require("./trip.model")
const resortSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [5, "school name must be at least 5 characters long"]
    },
	city: {
        type: String,
        required: [true, "City is required"],
        minlength: [5, "City name must be at least 5 characters long"]
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please fill a valid email address']
    },

	telephoneNumber: {
        type: Number,
        required: [true, "TelephoneNumber is required"],
        min: [9, "9 characters long"], 
    },
	password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [9, "Password  must be at least 9 characters long"]
    },
	capacity: {
        type: Number
    },
    description: {
        type: String,
        required: [true, "Password is required"],
        minlength: [20, "description  must be at least 20 characters long"],
        maxlength: [150, "description  must be at most 150 characters long"]
    },
    trips:[{  type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }]
},

{timestamps:true}
	

);

module.exports  = mongoose.model('Resort',resortSchema);
