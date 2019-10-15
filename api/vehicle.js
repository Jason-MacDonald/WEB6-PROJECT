// vehicle.js holds the API calls for the Vehicle table in th MySQL database.
// getAllVehicles   Returns all Vehicle Records.
function getAllVehicles(req, res) {
    const {knex} = req.app.locals;
    knex
        .select('year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body', 'featured')
        .from('vehicle')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

// getVehicle       Returns single vehicle record based on ID.
function getVehicle(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    console.log(req.params);
    knex    
        .select('year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body', 'featured')
        .from('vehicle')
        .where({id: `${id}`})
        .then(data => {
            if(data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Vehicle with ID ${id} could not be found`);
            }
    })
    .catch(error => res.status(500).json(error))
};

// postVehicle      Creates a new vehicle record with auto-incrementID.
function postVehicle(req, res, next) {
    const {knex} = req.app.locals;
    const payload = req.body;
    const mandatoryColumns = ['year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body', 'featured'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if(mandatoryColumnsExist) {
        knex('vehicle')
            .insert(payload)
            .then(response => res.status(201).json(`Vehicle Record Created`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Mandatory Columns are Required ${mandatoryColumns}`)
    };
};

// patchVehicle         Updates a single vehicle record based on ID.
function patchVehicle(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    const payload = req.body;
    knex('vehicle')
        .where('id', id)
        .update(payload)
        .then(response => { 
            if(response) {
                res.status(204).json(`Vehicle has been updated.`);
            }
            else {
                return res.status(404).json(`Vehicle with id ${id} not found`);
            }
        })
        .catch(error => res.status(500).json(error));
};

// deleteVehicle        Deletes a single vehicle based on ID.
function deleteVehicle(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex('vehicle')
        .where('id', id)
        .del()
        .then(response => {
            if(response) {
                res.status(200).json(`Vehicle with id ${id} has been removed`);
            }
            else {
                res.status(404).json(`Vehicle with id ${id} is not found`);
            }
        })
        .catch(error => res.status(500).json(error));
};

// getVehicle       Returns single vehicle record based on ID.
function getFeaturedVehicles(req, res) {
    const {knex} = req.app.locals;
    knex    
        .select('year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body', 'featured')
        .from('vehicle')
        .where({featured: true})
        .then(data => {
            if(data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Vehicles could not be found`);
            }
    })
    .catch(error => res.status(500).json(error))
};

// getVehicleUseParams      Returns a list of vehicles based on the provided params.
function getVehicleUseParams(req, res) {
    

    const {knex} = req.app.locals;

    const make = req.params.make;
    const model = req.params.model;
    const body = req.params.body;
    const transmission = req.params.transmission;
    const minYear = req.params.minYear;
    const maxYear = req.params.maxYear;
    const minPrice = req.params.minPrice;
    const maxPrice = req.params.maxPrice;
    const minKms = req.params.minKms;
    const maxKms = req.params.maxKms;

    // Where clauses will check if the parameter has been entered (not including default) 
    // and retrieve the appropriate vehicles.
    knex    
        .select('year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body', 'featured')
        .from('vehicle')
        .where(function () {
            if(make != 'Any+Make' && make != undefined)
                this.where('make', `${make}`);
        })
        .where(function () {
            if(model != 'Any+Model' && model != undefined)
                this.where('model', `${model}`)
        })
        .where(function () {
            if(body != 'Any+Body' && body != undefined)
                this.where('body', `${body}`)
        })
        .where(function () {
            if(transmission != 'Any+Transmission' && transmission != undefined)
                this.where('transmission', `${transmission}`)
        })
        .where(function () {
            if(minYear != 'Any+Year' && minYear != undefined)
                this.where('year', '>=', `${minYear}`)
        })
        .where(function () {
            if(maxYear != 'Any+Year' && maxYear != undefined)
                this.where('year', '<=', `${maxYear}`)
        })
        .where(function () {
            if(minPrice != 'Any+Price' && minPrice != undefined)
                this.where('price', '>=', `${minPrice}`)
        })
        .where(function () {
            if(maxPrice != 'Any+Price' && maxPrice != undefined)
                this.where('price', '<=', `${maxPrice}`)
        })
        .where(function () {
            if(minKms != 'Any+Kms' && minKms != undefined)
                this.where('km', '>=', `${minKms}`)
        })
        .where(function () {
            if(maxKms != 'Any+Kms' && maxKms != undefined)
                this.where('km', '<=', `${maxKms}`)
        })     
        .then(data => {
            if(data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Vehicles could not be found`);
            }
    })
    .catch(error => res.status(500).json(error))
};

module.exports = {
    getAllVehicles,
    getVehicle,
    postVehicle,
    patchVehicle,
    deleteVehicle,
    getFeaturedVehicles,
    getVehicleUseParams
};