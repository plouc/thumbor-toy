var Reflux        = require('reflux');
var _             = require('lodash');
var config        = require('./../../../config');
var ServerActions = require('./../actions/ServerActions');

var _server = '';

var ServerStore = Reflux.createStore({
    init: function () {
        this.listenTo(ServerActions.set, this.updateServer);
    },

    updateServer: function (server) {
        _server = server;

        this.trigger(_server);
    },

    current: function () {
        return _server;
    }
});

module.exports = ServerStore;