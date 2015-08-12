/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/* @flow */
import Reflux         from 'reflux';
import PresetsActions from './../actions/PresetsActions';
import SourceActions  from './../actions/SourceActions';
import ResizeActions  from './../actions/ResizeActions';
import FilterActions  from './../actions/FilterActions';
import ConfigStore    from './ConfigStore';


var presets = [];


const PresetsStore = Reflux.createStore({
    listenables: PresetsActions,

    init() {
        this.listenTo(ConfigStore, this.onConfigUpdate);
    },

    onConfigUpdate(config) {
        presets = config.presetImages || [];

        console.log('PresetsStore.onConfigUpdate', presets);

        this.trigger(presets);
    },

    load(preset) {
        console.log('PresetsStore.load()', preset.data);

        let { data } = preset;
        if (null === data.image || null === data.server) {
            return;
        }

        SourceActions.setServer(data.server);
        SourceActions.setImage(data.image);
        ResizeActions.clear();
        ResizeActions.update(data.resize);
        FilterActions.clear();
        data.filters.forEach(filter => {
            FilterActions.add(filter.type);
        });
    }
});

export default PresetsStore;
