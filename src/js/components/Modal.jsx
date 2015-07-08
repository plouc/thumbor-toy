/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React                  from 'react';
import Reflux                 from 'reflux';
import _                      from 'lodash';
import PanelsActions          from './../actions/PanelsActions';
import PanelTypes             from './../stores/PanelTypes';
import PanelsStore            from './../stores/PanelsStore';
import ConfigStore            from './../stores/ConfigStore';
import ToggleControl          from './form/ToggleControl.jsx';
import ChoiceControl          from './form/ChoiceControl.jsx';
import UserPreferencesStore   from './../stores/UserPreferencesStore';
import UserPreferencesActions from './../actions/UserPreferencesActions';
import UserPreferencesTypes   from './../stores/UserPreferencesTypes';
import TweenState             from 'react-tween-state';


var Modal = React.createClass({
    mixins: [
        Reflux.ListenerMixin,
        TweenState.Mixin
    ],

    getInitialState() {
        return {
            opened:  PanelsStore.get(PanelTypes.SETTINGS),
            top:     80,
            opacity: 0,
            display: 'none'
        };
    },

    componentWillMount() {
        this.listenTo(PanelsStore, () => {
            this.setState({
                opened:  PanelsStore.get(PanelTypes.SETTINGS),
                display: 'block'
            });
            this.tweenState('top', {
                easing:   TweenState.easingTypes.easeOutBack,
                duration: 200,
                endValue: this.state.opened ? 50 : 80,
                onEnd:    () => {
                    if (this.state.opened === false) {
                        this.setState({ display: 'none' });
                    }
                }
            });
            this.tweenState('opacity', {
                easing:   TweenState.easingTypes.easeOutBack,
                duration: 200,
                endValue: this.state.opened ? 1 : 0
            });
        });
    },

    onCloseClick() {
        PanelsActions.close(PanelTypes.SETTINGS);
    },

    onSettingChange(settingKey, settingValue) {
        var setting;

        switch (settingKey) {
            case 'theme':
                setting = UserPreferencesTypes.THEME;
                break;
            case 'showFiltersDescription':
                setting = UserPreferencesTypes.SHOW_FILTERS_DESCRIPTION;
                break;
            case 'mode':
                setting = UserPreferencesTypes.MODE;
                break;
            default:
                throw `no setting found with key: '${ settingKey }'`;
                break;
        }

        UserPreferencesActions.set(setting, settingValue);
    },

    render() {
        var classes = 'modal';
        if (this.state.opened === true) {
            classes += ' _is-opened';
        }

        var themes = [
            { value: 'dark',  label: 'Dark theme'  },
            { value: 'light', label: 'Light theme' }
        ];

        var style = {
            top:     this.getTweeningValue('top') + '%',
            opacity: this.getTweeningValue('opacity')
        };

        var modeSelector = null;
        if (_.isArray(ConfigStore.get('modes')) && ConfigStore.get('modes').length > 0) {
            modeSelector =
                <ChoiceControl
                    propKey="mode" label="mode"
                    choices={ConfigStore.get('modes')}
                    onChange={this.onSettingChange}
                    defaultValue={UserPreferencesStore.get(UserPreferencesTypes.MODE)}
                />
            ;
        }

        return (
            <div className={classes} style={{ display: this.state.display }}>
                <div className="modal__overlay" onClick={this.onCloseClick}/>
                <div className="modal__container" style={style}>
                    <div className="panel panel--settings">
                        <h3 className="panel__title">
                            <i className="fa fa-close" onClick={this.onCloseClick}/>
                            Settings
                        </h3>
                        <div className="panel__content">
                            <ToggleControl
                                propKey="showFiltersDescription" label="show filters description"
                                onChange={this.onSettingChange}
                                defaultValue={UserPreferencesStore.get(UserPreferencesTypes.SHOW_FILTERS_DESCRIPTION)}
                            />
                            {modeSelector}
                            <ChoiceControl
                                propKey="theme" label="theme"
                                choices={themes}
                                onChange={this.onSettingChange}
                                defaultValue={UserPreferencesStore.get(UserPreferencesTypes.THEME)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Modal;
