function getAllVehicles(req, res, next) {
    const {knex} = req.app.locals;
    knex
        .select('year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body')
        .from('vehicle')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

function getVehicle(req, res, next) {
    const {knex} = req.app.locals;
};

function postVehicle(req, res, next) {
    const {knex} = req.app.locals;
};

function patchVehicle(req, res, next) {
    const {knex} = req.app.locals;
};

function deleteVehicle(req, res, next) {
    const {knex} = req.app.locals;
};

module.exports = {
    getAllVehicles,
    getVehicle,
    postVehicle,
    patchVehicle,
    deleteVehicle
};