var Reflux = require('reflux');

var FilterActions = Reflux.createActions([
    'add',
    'delete',
    'update'
]);

module.exports = FilterActions;