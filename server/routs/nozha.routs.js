const SchoolController = require('../controllers/school.controller');
const ResortController = require('../controllers/resort.controller');
module.exports = function(app){
    app.get('/api/school', SchoolController.findAllSchools);
    // app.get('/api/school/:id', SchoolController.findOneSingleSchool);
    app.put('/api/school/:id1/:id2', ResortController.updateExistingSchool);
    // app.post('/api/school/new', SchoolController.createNewSchool);
    // app.delete('/api/school/:id', SchoolController.deleteAnExistingSchool);
    app.get('/api/resort', ResortController.findAllResorts);
    // app.get('/api/resort/:id', ResortController.findOneSingleResort);
    // // app.put('/api/resort/:id', ResortController.updateExistingResort);
    // app.post('/api/resort/new', ResortController.createNewResort);
    // app.delete('/api/resort/:id', ResortController.deleteAnExistingResort);
	}
