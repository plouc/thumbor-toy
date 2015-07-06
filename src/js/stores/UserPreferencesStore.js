/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux                 from 'reflux';
import UserPreferencesActions from './../actions/UserPreferencesActions';
import _                      from 'lodash';
import ls                     from 'local-storage';
import UserPreferencesTypes   from './UserPreferencesTypes';

var preferencesKey = 'toy-prefs';
var defaultPreferences = {
    [UserPreferencesTypes.SHOW_FILTERS_DESCRIPTION]: true,
    [UserPreferencesTypes.MODE]:                     'common',
    [UserPreferencesTypes.SETTINGS_PANEL_OPENED]:    true,
    [UserPreferencesTypes.FILTERS_PANEL_OPENED]:     true,
    [UserPreferencesTypes.THEME]:                    'dark'
};
var currentPrefs;

function ensurePrefExists(key) {
    if (!_.has(currentPrefs, key)) {
        throw Error(`No preference found for setting key '${ key }'`);
    }
}

var UserPreferencesStore = Reflux.createStore({
    listenables: UserPreferencesActions,

    init() {
        var savedPrefs = ls.get(preferencesKey) || {};
        currentPrefs = _.merge(defaultPreferences, savedPrefs);
    },

    set(key, value) {
        ensurePrefExists(key);

        currentPrefs[key] = value;
        ls.set(preferencesKey, currentPrefs);

        this.trigger(currentPrefs);
    },

    get(key) {
        ensurePrefExists(key);

        return currentPrefs[key];
    },

    getAll() {
        return currentPrefs;
    }
});

export default UserPreferencesStore;
