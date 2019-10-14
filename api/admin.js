//Currently working on.

function getAdmins(req, res) {
    const {knex} = req.app.locals;
    knex
        .select('date', 'description')
        .from('admin')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

function getAdmin(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex
        .select('date', 'description')
        .from('admin')
        .where({id: `${id}`})
        .then(data => {
            if(data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Admin with ID ${id} could not be found.`)
            }
        })
        .catch(error => res.status(500).json(error))
};

function postAdmin(req, res) {
    const {knex} = req.app.locals;
    const payload = req.body;
    const mandatoryColumns = ['date', 'description'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));
    
    if(mandatoryColumnsExist) {
        knex('admin')
            .insert(payload)
            .then(response => res.status(201).json(`Admin record created.`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Mandatory columns are required ${mandatoryColumns}`)
    };
    
};

function patchAdmin(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    const payload = req.body;

    knex('admin')
        .where({id: `${id}`})
        .update(payload)
        .then(response => {
            if(response) {
                res.status(204).json(`Admin has been updated.`);
            }
            else {
                return res.status(404).json(`Admin with id ${id} could not be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};

function deleteAdmin(req, res) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex('admin')
        .where('id', id)
        .del()
        .then(response => {
            if(response) {
                res.status(200).json(`Admin with id ${id} has been removed`)
            }
            else {
                res.status(404).json(`Admin with id ${id} cannot be found.`)
            }
        })
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getAdmins,
    getAdmin,
    postAdmin,
    patchAdmin,
    deleteAdmin
};