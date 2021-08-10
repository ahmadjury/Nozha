const Resort = require('../models/school.model')
const School = require('../models/school.model')

	module.exports.findAllResorts = (req, res) => {
		Resort.find()
			.then(allResort => res.json({ allResort }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.findOneSingleResort = (req, res) => {
		Resort.findOne({ _id: req.params.id })
			.then(oneSingleResort => res.json({ oneSingleResort}))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.createNewResort = (req, res) => {
		Resort.create(req.body)
			.then(newlyCreatedResort => res.json(newlyCreatedResort))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.updateExistingResort = (req, res) => {
		Resort.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true, runValidators: true }
		)
			.then(updatedResort => res.json({ updatedResort }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.deleteAnExistingResort = (req, res) => {
		Resort.deleteOne({ _id: req.params.id })
			.then(result => res.json({ result: result }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}