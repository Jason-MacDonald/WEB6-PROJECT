function getAllAccounts(res, req, next) {
    const {knex} = req.app.locals;
};

function getAccount(res, req, next) {
    const {knex} = req.app.locals;
};

function postAccount(res, req, next) {
    const {knex} = req.app.locals;
};

function patchAccount(res, req, next) {
    const {knex} = req.app.locals;
};

function deleteAccount(res, req, next) {
    const {knex} = req.app.locals;
};

module.exports = {
    getAllAccounts,
    getAccount,
    postAccount,
    patchAccount,
    deleteAccount
};