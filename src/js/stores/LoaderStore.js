var Reflux        = require('reflux');
var LoaderActions = require('./../actions/LoaderActions');

var _loading = false;

var ImageStore = Reflux.createStore({
    init: function () {
        this.listenTo(LoaderActions.loading, this.setLoading);
        this.listenTo(LoaderActions.loaded,  this.setLoaded);
    },

    setLoading: function () {
        _loading = true;

        this.trigger(_loading);
    },

    setLoaded: function () {
        _loading = false;

        this.trigger(_loading);
    }
});

module.exports = ImageStore;