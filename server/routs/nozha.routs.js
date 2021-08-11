const TripController = require('../controllers/trip.controller');
const ResortController = require('../controllers/resort.controller');
module.exports = function(app){
    app.get('/api/trip', TripController.findAllTrips);
    app.get('/api/trip/:id', TripController.findOneSingleTrip);
    // app.put('/api/trip/id', TripController.updateExistingTrip);
    app.post('/api/trip/new', TripController.createNewTrip);
    app.delete('/api/trip/:id', TripController.deleteAnExistingTrip);
    app.get('/api/resort', ResortController.findAllResorts);
    app.get('/api/resort/:id', ResortController.findOneSingleResort);
    app.put('/api/resort/:id', ResortController.updateExistingResort);
    app.post('/api/resort/new', ResortController.createNewResort);
    app.delete('/api/resort/:id', ResortController.deleteAnExistingResort);
	}
