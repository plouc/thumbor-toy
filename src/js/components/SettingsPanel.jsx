/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React                  from 'react';
import { ListenerMixin }      from 'reflux';
import _                      from 'lodash';
import Source                 from './Source.jsx';
import Resize                 from './Resize.jsx';
import PresetSelector         from './PresetSelector.jsx';
import UserPreferencesActions from './../actions/UserPreferencesActions';
import UserPreferencesStore   from './../stores/UserPreferencesStore';
import UserPreferencesTypes   from './../stores/UserPreferencesTypes';
import PanelTypes             from './../stores/PanelTypes';
import ConfigStore            from './../stores/ConfigStore';
import PresetsStore           from './../stores/PresetsStore';


var SettingsPanel = React.createClass({
    displayName: 'SettingsPanel',

    mixins: [ListenerMixin],

    getInitialState() {
        return {
            presets: [],
            config:  ConfigStore.getAll(),
            opened:  UserPreferencesStore.get(UserPreferencesTypes.SETTINGS_PANEL_OPENED)
        };
    },

    componentWillMount() {
        this.listenTo(ConfigStore,  this.onConfigUpdate);
        this.listenTo(PresetsStore, this.onPresetsUpdate);
        this.listenTo(UserPreferencesStore, () => {
            this.setState({
                opened: UserPreferencesStore.get(UserPreferencesTypes.SETTINGS_PANEL_OPENED)
            });
        });
    },

    onConfigUpdate(config) {
        console.log('SettingsPanel.onConfigUpdate()', config);
        this.setState({ config: config });
    },

    onPresetsUpdate(presets) {
        console.log('SettingsPanel.onPresetsUpdate()', presets);
        this.setState({ presets: presets });
    },

    onToggleClick() {
        UserPreferencesActions.set(UserPreferencesTypes.SETTINGS_PANEL_OPENED, !this.state.opened);
    },

    render() {
        let { presets, opened, config } = this.state;

        var classes           = 'sidebar sidebar--settings';
        var toggleIconClasses = 'fa fa-';
        if (opened === true) {
            classes += ' _is-opened';
            toggleIconClasses += 'times';
        } else {
            toggleIconClasses += 'bars';
        }

        return (
            <div className={classes}>
                {presets.length > 0 ? <PresetSelector presets={presets} /> : null}
                <Source source={config.source} />
                <Resize presets={config.presetsResize || []} />
                <span className="sidebar__toggle" onClick={this.onToggleClick}>
                    <i className={toggleIconClasses}/>
                </span>
            </div>
        );
    }
});

export default SettingsPanel;
