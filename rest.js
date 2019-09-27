const express = require('express');
const app = express();
const router = express.Router();

const config = require('./config');
const routes = require('./routes');
const middleware = require('./middleware')

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const knex = require('knex') (
    {
        client: 'mysql',
        connection: config.database
    }
);
app.locals.knex = knex;

// vehicle requests
router.get('/vehicles', routes.vehicleList.getAllVehicles);
router.get('/vehicles/:id', middleware.checkID, routes.vehicleList.getVehicle);
router.post('/vehicles', jsonParser, routes.vehicleList.postVehicle);
router.patch('/vehicles/:id', jsonParser, middleware.checkID, routes.vehicleList.patchVehicle);
router.delete('/vehicles/:id', middleware.checkID, routes.vehicleList.deleteVehicle);

// account requests
router.get('/accounts', routes.accountList.getAllAccounts);
router.get('/accounts/:id', middleware.checkID, routes.accountList.getAccount);
router.post('/accounts', jsonParser, routes.accountList.postAccount);
router.patch('/accounts/:id', jsonParser, middleware.checkID, routes.accountList.patchAccount);
router.delete('/accounts/:id', middleware.checkID, routes.accountList.deleteAccount);

// account requests
router.get('/admin', routes.accountList.getAdmins);
router.get('/admin/:id', middleware.checkID, routes.accountList.getAdmin);
router.post('/admin', jsonParser, routes.accountList.postAdmin);
router.patch('/admin/:id', jsonParser, middleware.checkID, routes.accountList.patchAdmin);
router.delete('/admin/:id', middleware.checkID, routes.accountList.deleteAdmin);

app.use('/api', router);

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});