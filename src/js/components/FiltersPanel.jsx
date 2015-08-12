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
import PanelTypes             from './../stores/PanelTypes';
import UserPreferencesActions from './../actions/UserPreferencesActions';
import UserPreferencesStore   from './../stores/UserPreferencesStore';
import UserPreferencesTypes   from './../stores/UserPreferencesTypes';
import Filters                from './filters/Filters.jsx';

var FiltersPanel = React.createClass({
    displayName: 'FiltersPanel',

    mixins: [ListenerMixin],

    getInitialState() {
        return {
            opened: UserPreferencesStore.get(UserPreferencesTypes.FILTERS_PANEL_OPENED)
        };
    },

    componentWillMount() {
        this.listenTo(UserPreferencesStore, () => {
            this.setState({
                opened: UserPreferencesStore.get(UserPreferencesTypes.FILTERS_PANEL_OPENED)
            });
        });
    },

    onToggleClick() {
        UserPreferencesActions.set(UserPreferencesTypes.FILTERS_PANEL_OPENED, !this.state.opened);
    },

    render() {
        var classes           = 'sidebar sidebar--filters';
        var toggleIconClasses = 'fa fa-';
        if (this.state.opened) {
            classes += ' _is-opened';
            toggleIconClasses += 'times';
        } else {
            toggleIconClasses += 'magic';
        }

        return (
            <div className={classes}>
                <Filters />
                <a className="app-info" href="https://github.com/plouc/thumbor-toy">
                    <i className="fa fa-github" />
                    thumbor-toy
                </a>
                <span className="sidebar__toggle" onClick={this.onToggleClick}>
                    <i className={toggleIconClasses}/>
                </span>
            </div>
        );
    }
});

export default FiltersPanel;
