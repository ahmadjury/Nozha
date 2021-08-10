const Resort = require('../models/resort.model')
const School = require('../models/school.model')

	module.exports.findAllResorts = (req, res) => {
		Resort.find()
			.then(allResort => res.json({ allResort }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	 
	// module.exports.findOneSingleResort = (req, res) => {
	// 	Resort.findOne({ _id: req.params.id })
	// 		.then(oneSingleResort => res.json({ oneSingleResort}))
	// 		.catch(err => res.json({ message: 'Something went wrong', error: err }));
	// }
	 
	// module.exports.createNewResort = (req, res) => {
	// 	Resort.create(req.body)
	// 		.then(newlyCreatedResort => res.json(newlyCreatedResort))
	// 		.catch(err => res.json({ message: 'Something went wrong', error: err }));
	// }
	 
	 
	// module.exports.deleteAnExistingResort = (req, res) => {
	// 	Resort.deleteOne({ _id: req.params.id })
	// 		.then(result => res.json({ result: result }))
	// 		.catch(err => res.json({ message: 'Something went wrong', error: err }));
	// }

    module.exports.updateExistingSchool = (req, res) => {
		School.findOneAndUpdate(
			{ _id: req.params.id1 },
			req.body,
			{ new: true, runValidators: true }
            
		)
        .then(school=> {
            Resort.findOneAndUpdate({'_id':req.params.id2},{ 
                $push:{schools: school}
             }).catch(err => res.json(err));
             return res.json(school)
        })
        .then(resort=> {
            School.findOneAndUpdate({'_id':req.params.id1},{ 
                $push:{resorts: resort}
             }).catch(err => res.json(err));
             return res.json(resort)
        })

        .catch(err => res.json(err));
    }

	