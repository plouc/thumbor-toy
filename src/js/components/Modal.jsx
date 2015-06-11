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
import PanelsActions          from './../actions/PanelsActions';
import PanelTypes             from './../stores/PanelTypes';
import PanelsStore            from './../stores/PanelsStore';
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
        if (settingKey === 'theme') {
            UserPreferencesActions.set(UserPreferencesTypes.THEME, settingValue);
        } else if (settingKey === 'showFiltersDescription') {
            UserPreferencesActions.set(UserPreferencesTypes.SHOW_FILTERS_DESCRIPTION, settingValue);
        }
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