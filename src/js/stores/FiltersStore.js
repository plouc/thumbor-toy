import Reflux        from 'reflux';
import FilterActions from './../actions/FilterActions';
import config        from './../../../config';
import baseFilters   from './../baseFilters';
import _             from 'lodash';

var currentFilters   = [];
var availableFilters = [];
var internalId       = 0;

_.forEach(config.filters, function (filter) {
    if (_.isString(filter)) {
        var baseFilter = _.findLast(baseFilters, { type: filter });
        if (!baseFilter) {
            throw `no filter found with type: '${ filter }'`;
        }
        availableFilters.push(baseFilter);
    } else {
        availableFilters.push(filter);
    }
});


var FiltersStore = Reflux.createStore({
    listenables: FilterActions,

    add(type) {
        var filter = _.find(availableFilters, { 'type': type });

        var filterInstance = _.clone(filter);
        filterInstance.active   = true;
        filterInstance.expanded = true;
        filterInstance.uid      = internalId;
        filterInstance.settings = {};

        filter.settingsConfig.forEach(setting => {
            filterInstance.settings[setting.key] = setting.default;
        });

        internalId++;

        currentFilters.push(filterInstance);

        _.forEach(currentFilters, (filter, i) => { filter.id = i; });

        this.trigger();
    },

    delete(uid) {
        _.remove(currentFilters, { uid: uid });
        _.forEach(currentFilters, (filter, i) => { filter.id = i; });

        this.trigger();
    },

    clear() {
        currentFilters = [];

        this.trigger();
    },

    move(sourceId, targetId) {
        var pulled = _.pullAt(currentFilters, sourceId);
        if (pulled.length > 0) {
            currentFilters.splice(targetId, 0, pulled[0]);
            _.forEach(currentFilters, (filter, i) => { filter.id = i; });

            this.trigger();
        }
    },

    update(uid, settings) {
        _.merge(_.find(currentFilters, { uid: uid }).settings, settings);

        this.trigger();
    },

    current() {
        return currentFilters;
    },

    available() {
        return availableFilters;
    }
});

export default FiltersStore;
