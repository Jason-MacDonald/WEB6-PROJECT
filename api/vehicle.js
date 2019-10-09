function getAllVehicles(req, res) {
    const {knex} = req.app.locals;
    knex
        .select('year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body', 'featured')
        .from('vehicle')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

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
    const minKMS = req.params.minKMS;
    const maxKMS = req.params.maxKMS;

    knex    
        .select('year', 'transmission', 'description', 'price', 'km', 'location', 'seats', 'model', 'make', 'body', 'featured')
        .from('vehicle')
        .where(function () {
            if(make != 'Any Make')
                this.where('make', `${make}`);
        })
        .where(function () {
            if(model != 'Any Model')
                this.where('model', `${model}`)
        })
        .where(function () {
            if(body != 'any')
                this.where('body', `${body}`)
        })
        .where(function () {
            if(transmission != 'any')
                this.where('transmission', `${transmission}`)
        })
        .where(function () {
            if(minYear != 'any')
                this.where('year', '>=', `${minYear}`)
        })
        .where(function () {
            if(maxYear != 'any')
                this.where('year', '<=', `${maxYear}`)
        })
        .where(function () {
            if(minPrice != 'any')
                this.where('price', '>=', `${minPrice}`)
        })
        .where(function () {
            if(maxPrice != 'any')
                this.where('price', '<=', `${maxPrice}`)
        })
        .where(function () {
            if(minKMS != 'any')
                this.where('km', '>=', `${minKMS}`)
        })
        .where(function () {
            if(maxKMS != 'any')
                this.where('km', '<=', `${maxKMS}`)
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
    getVehicleUseParams
};