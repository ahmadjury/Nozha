const mongoose = require('mongoose');
const Schema = new mongoose.Schema;
require("./resort.model")
const schoolSchema =  new mongoose.Schema({
    
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
	licenseNumber: {
        type: Number,
        required: [true, "LicenseNumber is required"],
        min: [8, "8 characters long"],
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

    dateOfReservation: {
        type:Date,
    },
    numberOfStudents: {
        type: Number,
    },

    resorts:[{type:mongoose.Schema.Types.ObjectId, ref: 'Resort' }]
    // resorts:[{type:Schema.Types.ObjectId, ref: 'Resort' }]
   

},

{timestamps:true}
	

   );


   module.exports = mongoose.model('School',schoolSchema);
   
  

 