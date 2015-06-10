/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React          from 'react';
import Reflux         from 'reflux';
import _              from 'lodash';
import ImageSource    from './ImageSource.jsx';
import Resize         from './Resize.jsx';
import ServerSelector from './ServerSelector.jsx';
import PresetSelector from './PresetSelector.jsx';
import PanelsStore    from './../stores/PanelsStore';
import PanelsActions  from './../actions/PanelsActions';
import ServerActions  from './../actions/ServerActions';
import PanelTypes     from './../stores/PanelTypes';

var SettingsPanel = React.createClass({
    displayName: 'SettingsPanel',

    mixins: [
        Reflux.ListenerMixin
    ],

    getInitialState() {
        return {
            opened: PanelsStore.get(PanelTypes.SETTINGS_PANEL)
        };
    },

    componentWillMount() {
        this.listenTo(PanelsStore, () => {
            this.setState({
                opened: PanelsStore.get(PanelTypes.SETTINGS_PANEL)
            });
        });
    },

    onToggleClick() {
        PanelsActions.toggle(PanelTypes.SETTINGS_PANEL);
    },

    render() {
        var presetSelector = null;
        if (_.isArray(this.props.config.presetImages) && this.props.config.presetImages.length > 0) {
            presetSelector = <PresetSelector />;
        }

        var serverSelector = null;
        if (_.isArray(this.props.config.server)) {
            serverSelector = <ServerSelector />;
        } else {
            ServerActions.set(this.props.config.server);
        }

        var classes           = 'sidebar sidebar--settings';
        var toggleIconClasses = 'fa fa-';
        if (this.state.opened) {
            classes += ' _is-opened';
            toggleIconClasses += 'times';
        } else {
            toggleIconClasses += 'bars';
        }

        return (
            <div className={classes}>
                {presetSelector}
                {serverSelector}
                <ImageSource images={this.props.config.images} />
                <Resize presets={this.props.config.presetsResize || []} />
                <span className="sidebar__toggle" onClick={this.onToggleClick}>
                    <i className={toggleIconClasses}/>
                </span>
            </div>
        );
    }
});

export default SettingsPanel;
