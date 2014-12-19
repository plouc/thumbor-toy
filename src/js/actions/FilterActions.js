var Reflux = require('reflux');

var FilterActions = Reflux.createActions([
    'add',
    'delete',
    'update',
    'clear'
]);

module.exports = FilterActions;
