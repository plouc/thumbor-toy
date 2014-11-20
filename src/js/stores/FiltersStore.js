var Reflux        = require('reflux');
var FilterActions = require('./../actions/FilterActions');
var config        = require('./../../../config');
var baseFilters   = require('./../baseFilters');
var _             = require('lodash');

var _currentFilters   = [];
var _availableFilters = [];

_.forEach(config.filters, function (filter) {
    if (_.isString(filter)) {
        var baseFilter = _.findLast(baseFilters, { type: filter });
        if (!baseFilter) {
            throw "no filter found with type: " + filter;
        }
        _availableFilters.push(baseFilter);
    } else {
        _availableFilters.push(filter);
    }
});


var FiltersStore = Reflux.createStore({
    init: function () {
        this.listenTo(FilterActions.update, this.updateFilter);
        this.listenTo(FilterActions.add,    this.addFilter);
        this.listenTo(FilterActions.delete, this.deleteFilter);
    },

    addFilter: function (type) {
        var filter = _.find(_availableFilters, { 'type': type });

        var filterInstance = _.clone(filter);
        filterInstance.active = true;

        _currentFilters.push(filterInstance);

        _.forEach(_currentFilters, function (filter, i) {
            filter.id = i;
        });

        this.trigger();
    },

    deleteFilter: function (id) {
        _.remove(_currentFilters, { id: id });
        _.forEach(_currentFilters, function (filter, i) {
            filter.id = i;
        });

        this.trigger();
    },

    updateFilter: function (id, settings) {
        _.merge(_currentFilters[id], settings);

        this.trigger();
    },

    current: function () {
        return _currentFilters;
    },

    available: function () {
        return _availableFilters;
    }
});

module.exports = FiltersStore;