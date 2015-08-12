/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/* @flow */
import Reflux                 from 'reflux';
import PanelsActions          from './../actions/PanelsActions';
import UserPreferencesActions from './../actions/UserPreferencesActions';
import UserPreferencesStore   from './UserPreferencesStore';
import PanelTypes             from './PanelTypes';
import UserPreferencesTypes   from './UserPreferencesTypes';

var panelsState = {
    [PanelTypes.SETTINGS]: false
};

const PanelsStore = Reflux.createStore({
    listenables: PanelsActions,

    updated(panelId) {
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

export default PanelsStore;
