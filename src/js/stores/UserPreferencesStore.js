import Reflux                 from 'reflux';
import UserPreferencesActions from './../actions/UserPreferencesActions';
import _                      from 'lodash';
import ls                     from 'local-storage';

var preferencesKey = 'toy-prefs';
var defaultPreferences = {
    showFiltersDescription: true,
    'panel.settings':       true,
    'panel.filters':        true
};
var currentPrefs;

var UserPreferencesStore = Reflux.createStore({
    listenables: UserPreferencesActions,

    init() {
        var savedPrefs = ls.get(preferencesKey) || {};
        currentPrefs = _.merge(defaultPreferences, savedPrefs);
    },

    set(key, value) {
        if (!_.has(currentPrefs, key)) {
            throw Error(`No preference found for key '${ key }'`);
        }

        currentPrefs[key] = value;
        ls.set(preferencesKey, currentPrefs);

        this.trigger(currentPrefs);
    },

    get(key) {
        if (!_.has(currentPrefs, key)) {
            throw Error(`No preference found for key '${ key }'`);
        }

        return currentPrefs[key];
    },

    getAll() {
        return currentPrefs;
    }
});

export default UserPreferencesStore;
