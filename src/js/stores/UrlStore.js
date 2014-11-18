var Reflux       = require('reflux');
var _            = require('lodash');
var config       = require('./../../../config');
var ImageStore   = require('./ImageStore');
var FiltersStore = require('./FiltersStore');

var $ = require('jquery');

var UrlStore = Reflux.createStore({
    init: function () {
        this.listenTo(ImageStore,   this.update);
        this.listenTo(FiltersStore, this.update);
    },

    update: function () {
        var activeFilters = FiltersStore.actives();
        var filters = '';
        if (activeFilters.length) {
            filters = 'filters:' + _.map(activeFilters, function (filter) {
                return filter.stringify();
            }).join(':') + '/';
        }

        var url = config.baseUrl + 'unsafe/' + filters + ImageStore.get();

        console.log('URL', url);

        //console.log(window);

        this.trigger(url);
    }
});

module.exports = UrlStore;