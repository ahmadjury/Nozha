const School = require('../models/school.model')
const Resort = require('../models/resort.model')


	module.exports.findAllSchools = (req, res) => {
		School.find()
			.then(allSchool => res.json({ allSchool }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.findOneSingleSchool = (req, res) => {
		School.findOne({ _id: req.params.id })
			.then(oneSingleSchool => res.json({ oneSingleSchool}))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.createNewSchool = (req, res) => {
		console.log(req.name);
		School.create(req.body)
			.then(newlyCreatedSchool => res.json(newlyCreatedSchool))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.updateExistingSchool = (req, res) => {
		School.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true, runValidators: true }
		)
			.then(updatedSchool => res.json({ updatedSchool }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	module.exports.deleteAnExistingSchool = (req, res) => {
		School.deleteOne({ _id: req.params.id })
			.then(result => res.json({ result: result }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}