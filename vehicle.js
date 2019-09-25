function getAllVehicles(res, req, next) {
    const {knex} = req.app.locals;
};

function getVehicle(res, req, next) {
    const {knex} = req.app.locals;
};

function postVehicle(res, req, next) {
    const {knex} = req.app.locals;
};

function patchVehicle(res, req, next) {
    const {knex} = req.app.locals;
};

function deleteVehicle(res, req, next) {
    const {knex} = req.app.locals;
};

module.exports = {
    getAllVehicles,
    getVehicle,
    postVehicle,
    patchVehicle,
    deleteVehicle
};