// account.js holds the API calls for the Accounts table in th MySQL database.
// getAllAccounts   Returns all Account Records
function getAllAccounts(req, res, next) {
    const {knex} = req.app.locals;
    knex
        .select('name','email')
        .from('account')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

// getAccount       Returns a single Account record based on ID.
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

function getAccountByUserDetails(req, res, next) {
    const {knex} = req.app.locals;
    const {username} = req.params;
    const {password} = req.params;
    console.log(username)
    console.log(password)
    knex
        .select('name', 'email')
        .from('account')
        .where({name: `${username}`, password: `${password}`})
        .then(data => {
            if(data.length > 0) {
                return res.status(200).json(data);
            }
            else {
                return res.status(404).json(`Account with the supplied credentials ${id} could not be found.`)
            }
    })
    .catch(error => res.status(500).json(error))
};





// postAccount      Creates a new Account Record with an auto-increment ID.
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

// patchAccount     Updates a single account record based on ID.
function patchAccount(req, res, next) {
    const {knex} = req.app.locals;
    const {id} = req.params;
    const payload = req.body;
    knex('account')
        .where('id', id)
        .update(payload)
        .then(response => {
            if(response) {
                res.status(204).json(`Account has been updated.`);
            }
            else {
                return res.status(404).json(`Account with ID ${id} cannot be found.`)
            }
    })
    .catch(error => res.status(500).json(error));
};

// deleteAccount    Deletes an Account Record based on ID.
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
    getAccountByUserDetails,
    postAccount,
    patchAccount,
    deleteAccount
};