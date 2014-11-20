var Reflux = require('reflux');
var _      = require('lodash');
var config = require('./../../../config');

var _server = '';

var ServerStore = Reflux.createStore({
    init: function () {
    },

    update: function () {

        this.trigger(url);
    }
});

module.exports = ServerStore;