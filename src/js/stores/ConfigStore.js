/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux               from 'reflux';
import UserPreferencesStore from './UserPreferencesStore';
import ConfigActions        from './../actions/ConfigActions';
import UserPreferencesTypes from './UserPreferencesTypes';
import _                    from 'lodash';
import config               from './../../../config';

function ensureModeExists(key) {
    if (!_.has(config, key)) {
        throw Error(`No configuration found for mode '${ key }'`);
    }
}

var currentConfig;

var ConfigStore = Reflux.createStore({
    listenables: ConfigActions,

    init() {
        this.listenTo(UserPreferencesStore, this.update);
        this.update();
    },

    update() {
        var currentMode = UserPreferencesStore.get(UserPreferencesTypes.MODE);
        ensureModeExists(currentMode);

        currentConfig = _.cloneDeep(config.common);
        if (currentMode != 'common') {
            currentConfig = _.merge(currentConfig, config[currentMode], (a, b) => { if (_.isArray(a)) { return a.concat(b); } });
        }

        this.trigger();
    },

    get(key) {
        return currentConfig[key];
    },

    getAll() {
        return currentConfig;
    }
});

export default ConfigStore;
