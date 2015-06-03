import Reflux        from 'reflux';
import FilterActions from './../actions/FilterActions';
import config        from './../../../config';
import baseFilters   from './../baseFilters';
import _             from 'lodash';

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
    init() {
        this.listenTo(FilterActions.update, this.updateFilter);
        this.listenTo(FilterActions.add,    this.addFilter);
        this.listenTo(FilterActions.delete, this.deleteFilter);
        this.listenTo(FilterActions.clear,  this.clearFilters);
    },

    addFilter(type) {
        var filter = _.find(_availableFilters, { 'type': type });

        var filterInstance = _.clone(filter);
        filterInstance.active = true;

        _currentFilters.push(filterInstance);

        _.forEach(_currentFilters, function (filter, i) {
            filter.id = i;
        });

        this.trigger();
    },

    deleteFilter(id) {
        _.remove(_currentFilters, { id: id });
        _.forEach(_currentFilters, function (filter, i) {
            filter.id = i;
        });

        this.trigger();
    },

    clearFilters() {
        _currentFilters = [];

        this.trigger();
    },

    updateFilter(id, settings) {
        _.merge(_currentFilters[id], settings);

        this.trigger();
    },

    current() {
        return _currentFilters;
    },

    available() {
        return _availableFilters;
    }
});

export default FiltersStore;
