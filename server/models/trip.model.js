const mongoose = require('mongoose');
const Schema = new mongoose.Schema;
require("./resort.model")
const tripSchema =  new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "School name is required"],
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

    dateOfReservation: { // validation date
        type:Date,
    },
    numberOfStudents: { // validation number
        type: Number,
    },

    resort:{ type:mongoose.Schema.Types.ObjectId, ref: 'Resort' }
},
{ timestamps: true });


module.exports = mongoose.model('Trip',tripSchema);