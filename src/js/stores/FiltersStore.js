/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux                from 'reflux';
import FilterActions         from './../actions/FilterActions';
import ConfigStore           from './../stores/ConfigStore';
import AvailableFiltersStore from './../stores/AvailableFiltersStore';
import baseFilters           from './../baseFilters';
import _                     from 'lodash';

var currentFilters   = [];
var internalId       = 0;

var FiltersStore = Reflux.createStore({
    listenables: FilterActions,

    init() {
        this.listenTo(AvailableFiltersStore, this.removeUnavailableFilters);
    },

    add(type, settings = {}) {
        var filter = _.find(AvailableFiltersStore.get(), { 'type': type });
        if (filter === undefined) {
            throw `invalid filter type: '${ type }'`;
        }

        var defaults = _.reduce(filter.settingsConfig, (result, config) => {
            result[config.key] = config.default;
            return result;
        }, {});

        var filterInstance = _.clone(filter);
        filterInstance.active   = true;
        filterInstance.expanded = true;
        filterInstance.uid      = internalId;
        filterInstance.settings = _.extend({}, defaults, settings);

        internalId++;

        currentFilters.push(filterInstance);

        _.forEach(currentFilters, (f, i) => { f.id = i; });

        this.trigger();
    },

    removeUnavailableFilters() {
        currentFilters
            .filter(f => { return _.find(AvailableFiltersStore.get(), { type: f.type }) === undefined; })
            .forEach(f => { this.remove(f.uid); });

        this.trigger();
    },

    remove(uid) {
        _.remove(currentFilters, { uid: uid });
        _.forEach(currentFilters, (filter, i) => { filter.id = i; });
    },

    delete(uid) {
        this.remove(uid);

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

    toggle(uid) {
        var filter = _.find(currentFilters, { uid: uid });
        filter.active = !filter.active;

        this.trigger();
    },

    update(uid, settings) {
        _.merge(_.find(currentFilters, { uid: uid }).settings, settings);

        this.trigger();
    },

    current() {
        return currentFilters;
    },
});

export default FiltersStore;
