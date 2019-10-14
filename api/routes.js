// Places the list of API calls into a single variable for each table type.
const vehicleList = require('./vehicle.js');
const accountList = require('./account.js');
const adminList = require('./admin.js');

module.exports = {
    vehicleList,
    accountList,
    adminList
};