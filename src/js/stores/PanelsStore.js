/* @flow */
import Reflux                 from 'reflux';
import PanelsActions          from './../actions/PanelsActions';
import UserPreferencesActions from './../actions/UserPreferencesActions';
import UserPreferencesStore   from './UserPreferencesStore';

var panelsState = {
    settings: UserPreferencesStore.get('panel.settings'),
    filters:  UserPreferencesStore.get('panel.filters')
};

export default Reflux.createStore({
    listenables: PanelsActions,

    updated(panelId) {
        UserPreferencesActions.set(`panel.${ panelId }`, panelsState[panelId]);

        this.trigger(panelId, panelsState[panelId]);
    },

    open(panelId: string) {
        panelsState[panelId] = true;

        this.updated(panelId);
    },

    close(panelId: string) {
        panelsState[panelId] = false;

        this.updated(panelId);
    },

    toggle(panelId: string) {
        panelsState[panelId] = !panelsState[panelId];

        this.updated(panelId);
    },

    get(panelId: string): boolean {
        return panelsState[panelId];
    }
});
