// Sets up express functionality for project.
const express = require('express');
const app = express();
const router = express.Router();

// Imports the appropriate local files for project.
const config = require('./config');
const routes = require('./routes');
const middleware = require('./middleware')

// jsonParser is used to send the body via the API call.
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Sets up a knex object and assigns it to app.locals.knex.
const knex = require('knex') (
    {
        client: 'mysql',
        connection: config.database
    }
);
app.locals.knex = knex;

// middleware to add headers. Required to allow methods to be performed on database.
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// vehicle requests
router.get('/vehicles', routes.vehicleList.getAllVehicles);
router.get('/vehicles/:id', middleware.checkID, routes.vehicleList.getVehicle);
router.post('/vehicles', jsonParser, routes.vehicleList.postVehicle);
router.patch('/vehicles/:id', jsonParser, middleware.checkID, routes.vehicleList.patchVehicle);
router.delete('/vehicles/:id', middleware.checkID, routes.vehicleList.deleteVehicle);

// test routes to perform filtered query on vehicle table from database.
router.get('/vehicles/:make/:model/:body/:transmission/:minYear/:maxYear/:minPrice/:maxPrice/:minKms/:maxKms', routes.vehicleList.getVehicleUseParams);
router.get('/featured', routes.vehicleList.getFeaturedVehicles);

// account requests
router.get('/accounts', routes.accountList.getAllAccounts);
router.get('/accounts/:id', middleware.checkID, routes.accountList.getAccount);
router.get('/accounts/:username/:password', routes.accountList.getAccountByUserDetails);
router.post('/accounts', jsonParser, routes.accountList.postAccount);
router.patch('/accounts/:id', jsonParser, middleware.checkID, routes.accountList.patchAccount);
router.delete('/accounts/:id', middleware.checkID, routes.accountList.deleteAccount);

// admin requests
router.get('/admin', routes.adminList.getAdmins);
router.get('/admin/:id', middleware.checkID, routes.adminList.getAdmin);
router.post('/admin', jsonParser, routes.adminList.postAdmin);
router.patch('/admin/:id', jsonParser, middleware.checkID, routes.adminList.patchAdmin);
router.delete('/admin/:id', middleware.checkID, routes.adminList.deleteAdmin);

app.use('/api', router);

// Starts up the API server.
app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});