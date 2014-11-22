var Reflux = require('reflux');

var LoaderActions = Reflux.createActions([
    'loading',
    'loaded'
]);

module.exports = LoaderActions;