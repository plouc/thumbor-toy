var Reflux       = require('reflux');
var _            = require('lodash');
var config       = require('./../../../config');
var ImageStore   = require('./ImageStore');
var FiltersStore = require('./FiltersStore');
var ResizeStore  = require('./ResizeStore');

var UrlStore = Reflux.createStore({
    init: function () {
        this.listenTo(ImageStore,   this.update);
        this.listenTo(FiltersStore, this.update);
        this.listenTo(ResizeStore,  this.update);
    },

    update: function () {
        var currentFilters = _.filter(FiltersStore.current(), { 'active': true });
        var filters        = '';
        if (currentFilters.length) {
            filters = 'filters:' + _.map(currentFilters, function (filter) {
                return filter.stringify();
            }).join(':') + '/';
        }

        var resizeConfig = ResizeStore.config();
        var resize       = '';
        if (resizeConfig.active) {
            if (resizeConfig.debug) {
                resize += 'debug/';
            }

            if (resizeConfig.fit) {
                resize += 'fit-in/';
            }

            resize += resizeConfig.width + 'x' + resizeConfig.height + '/';

            if (resizeConfig.smart) {
                resize += 'smart/';
            }
        }

        var url = config.baseUrl + 'unsafe/' + resize + filters + ImageStore.get();

        this.trigger(url);
    }
});

module.exports = UrlStore;