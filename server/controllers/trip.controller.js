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
	 
	module.exports.createNewTrip = (req, res) => {
		console.log(req.body);
		Trip.create(req.body) // push to trips array 
		 .then(trip=> {
            Resort.findOneAndUpdate({'_id':id},{ 
                $push:{trips: trip}
             })
			 .catch(err => res.json(err));
             return res.json(person)
        })
        .catch(err => res.status(400).json(err))
}
	module.exports.deleteAnExistingTrip = (req, res) => {
		Trip.deleteOne({ _id: req.params.id })
			.then(result => res.json({ result: result }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}

