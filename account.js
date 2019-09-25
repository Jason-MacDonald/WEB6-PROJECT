function getAllAccounts(req, res, next) {
    const {knex} = req.app.locals;
    knex
        .select('name','email')
        .from('account')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

function getAccount(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex
        .select('name', 'email')
        .from('account')
        .where({id: `${id}`})
        .then(data => {
            if(data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Account with ID ${id} could not be found.`)
            }
    })
    .catch(error => res.status(500).json(error))
};

function postAccount(req, res, next) {
    const {knex} = req.app.locals;
    const payload = req.body;
    const mandatoryColumns = ['name', 'password', 'email'];
    const payloadKeys = Object.keys(payload);
    const mandatoryColumnsExist = mandatoryColumns.every(mc => payloadKeys.includes(mc));

    if(mandatoryColumnsExist) {
        knex('account')
            .insert(payload)
            .then(response => res.status(201).json(`Account Record Created`))
            .catch(error => res.status(500).json(error))
    }
    else {
        return res.status(400).json(`Mandatory Columns are Required ${mandatoryColumns}`)
    }
};

function patchAccount(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    const payload = req.body;
    knex('account')
        .where('id', id)
        .update(payload)
        .then(response => {
            if(response) {
                res.status(204).json();
            }
            else {
                return res.status(404).json(`Account with ID ${id} cannot be found.`)
            }
    })
    .catch(error => res.status(500).json(error));
};

function deleteAccount(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    knex('account')
        .where('id', id)
        .del()
        .then(response => {
            if(response) {
                res.status(200).json(`Account with id ${id} has been deleted.`)
            }
            else {
                res.status(400).json(`Account with id ${id} cannot be found.`)
            }
    })
    .catch(error => res.status(500).json(error));
};

module.exports = {
    getAllAccounts,
    getAccount,
    postAccount,
    patchAccount,
    deleteAccount
};