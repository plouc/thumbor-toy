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
    },

    updateResize: function (config) {
        _resizeConfig = _.merge(_resizeConfig, config);

        this.trigger();
    },

    config: function () {
        return _resizeConfig;
    }
});

module.exports = ResizeStore;