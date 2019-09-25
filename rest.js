const express = require('express');
const app = express();
const router = express.Router();

const config = require('./config');
const routes = require('./routes');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const knex = require('knex') (
    {
        client: 'mysql',
        connection: config.database
    }
);
app.locals.knex = knex;

//

app.use('api', router);

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});