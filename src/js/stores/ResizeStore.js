var Reflux        = require('reflux');
var ResizeActions = require('./../actions/ResizeActions');
var _             = require('lodash');

var _resizeConfig = {
    active:    false,
    width:     300,
    height:    300,
    smart:     true,
    debug:     false,
    fit:       false
};

var ResizeStore = Reflux.createStore({
    init: function () {
        this.listenTo(ResizeActions.update, this.updateResize);
        this.listenTo(ResizeActions.clear,  this.clearResize);
    },

    updateResize: function (config) {
        _resizeConfig = _.merge(_resizeConfig, config);

        this.trigger();
    },

    clearResize: function () {
        _resizeConfig = {
            active:    false,
            width:     300,
            height:    300,
            smart:     true,
            debug:     false,
            fit:       false
        };

        this.trigger();
    },

    config: function () {
        return _resizeConfig;
    }
});

module.exports = ResizeStore;
