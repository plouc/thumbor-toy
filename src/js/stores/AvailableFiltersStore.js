/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux        from 'reflux';
import FilterActions from './../actions/FilterActions';
import ConfigStore   from './../stores/ConfigStore';
import baseFilters   from './../baseFilters';
import _             from 'lodash';

var availableFilters = [];

var AvailableFiltersStore = Reflux.createStore({
    init() {
        this.listenTo(ConfigStore, this.update);
        this.update();
    },

    update() {
        availableFilters = [];
        ConfigStore.get('filters').forEach(filter => {
            var baseFilter;
            if (_.isString(filter)) {
                baseFilter = _.findLast(baseFilters, { type: filter });
                if (!baseFilter) {
                    throw `no filter found with type: '${ filter }'`;
                }
                filter = baseFilter;
            } else {
                baseFilter = _.findLast(baseFilters, { type: filter.type });
                if (baseFilter) {
                    filter = _.merge(baseFilter, filter);
                }
            }

            filter.settingsConfig = filter.settingsConfig || [];

            availableFilters.push(filter);
        });

        this.trigger();
    },

    get() {
        return availableFilters;
    }
});

export default AvailableFiltersStore;
