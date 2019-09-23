const http = require('http');
const url = require('url');

const data = require('../data');
const port = 8080;

function vehicleList(req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
};

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
}

function errorRequest(req, res) {
    res.statusCode = 404;
    res.end(`This api is not supported!`);
};

const server = http.createServer((req, res) => {
    const urlVehicle = url.parse(req.url);

    if (urlVehicle.pathname === '/api/vehicle') {
        switch (req.method) {
            case 'GET':
                vehicleList(req, res);
                break;
            case 'POST':
                addVehicle(req, res);
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

