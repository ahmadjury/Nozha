const Trip = require('../models/trip.model')
const Resort = require('../models/resort.model')


	module.exports.findAllTrips = (req, res) => {
		Trip.find()
			.then(allTrip => res.json({ allTrip }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.findOneSingleTrip = (req, res) => {
		Trip.findOne({ _id: req.params.id })
			.then(oneSingleTrip => res.json({ oneSingleTrip}))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.createNewTrip = async (req, res) => {
		console.log(req.body);
		const {name, city, email, telephoneNumber,dateOfReservation , numberOfStudents,resort}=req.body
		try{
			let trip = await Trip.create({name, city, email, telephoneNumber,dateOfReservation , numberOfStudents,resort})
			console.log(trip)
			let resortUpdated = await  Resort.findOneAndUpdate({'_id':resort},{$push:{trips: trip} }, {new:true})
			res. json(trip)
		}
		catch (err){
			console.log(err)
		res.status(400).json(err)
		}
}
	module.exports.deleteAnExistingTrip = (req, res) => {
		Trip.deleteOne({ _id: req.params.id })
			.then(result => res.json({ result: result }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	module.exports.updateExistingTrip = (req, res) => {
		Trip.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true, runValidators: true }
		)
			.then(updatedTrip => res.json({updatedTrip }))
			.catch(err => res.status(400).json(err));
	}

