// Defines the database connection and server port for the API.

const APIServerPort = 4200;

const database = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'P@ssword1',
    database: 'carcompanydatabase',
    insecureAuth: true 
};

module.exports = {
    database,
    APIServerPort
}