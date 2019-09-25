function getAllAccounts(req, res, next) {
    const {knex} = req.app.locals;
    knex
        .select('name','email')
        .from('account')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
};

// function getAccount(req, res, next) {
//     const {knex} = req.app.locals;
// };

// function postAccount(req, res, next) {
//     const {knex} = req.app.locals;
// };

// function patchAccount(req, res, next) {
//     const {knex} = req.app.locals;
// };

// function deleteAccount(req, res, next) {
//     const {knex} = req.app.locals;
// };

module.exports = {
    getAllAccounts //,
    // getAccount,
    // postAccount,
    // patchAccount,
    // deleteAccount
};