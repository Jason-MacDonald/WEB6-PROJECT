const http = require('http');
const url = require('url');

const data = require('../data');
const port = 8080;

// GET a list of all vehicles.
function getVehicleList(req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
};

// TODO: GET record of one vehicle.
function getVehicle(req, res) {

};

// POST (create) a vehicle record.
function addVehicle(req, res) {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
        data.push(JSON.parse(body));
        res.statusCode = 201;
        return res.end(`Added ${JSON.parse(body).make}`);
    });
    req.on('error', error => {
        res.statusCode = 400;
        return res.end(error);
    });
};

// TODO: PATCH (update) a vehicle record.
function updateVehicle(req, res) {

};

// TODO: DELETE a vehicle record.
function deleteVehicle(req, res) {
    req.on('end', () => {
        
        // TODO: Remove vehicle with provided id.

        return res.end(`Vehicle Deleted`);
    });
    req.on('error', error => {
        return res.end(error);
    });
};

// Error.
function errorRequest(req, res) {
    res.statusCode = 404;
    res.end(`This api is not supported!`);
};

const server = http.createServer((req, res) => {
    const urlVehicle = url.parse(req.url);

    if (urlVehicle.pathname === '/api/vehicle') {
        switch (req.method) {
            case 'GET':
                // TODO: GET request for single vehicle.
                getVehicleList(req, res);
                break;             
            case 'POST':
                addVehicle(req, res);
                break;
            //case 'PATCH':
                //updateVehicle(req, res);
                //break;
            case 'DELETE':
                deleteVehicle(req, res);
                break;
            default:
                errorRequest(req, res);
                break;
        }
    }
    else {
        errorRequest(req, res);
    }
});

server.listen(port, () => console.info(`Server started on port ${port}.`));