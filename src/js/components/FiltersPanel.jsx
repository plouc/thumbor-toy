/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React         from 'react';
import Reflux        from 'reflux';
import PanelTypes    from './../stores/PanelTypes';
import PanelsStore   from './../stores/PanelsStore';
import PanelsActions from './../actions/PanelsActions';
import Filters       from './filters/Filters.jsx';

var FiltersPanel = React.createClass({
    displayName: 'FiltersPanel',

    mixins: [
        Reflux.ListenerMixin
    ],

    getInitialState() {
        return {
            opened: PanelsStore.get(PanelTypes.FILTERS_PANEL)
        };
    },

    componentWillMount() {
        this.listenTo(PanelsStore, () => {
            this.setState({
                opened: PanelsStore.get(PanelTypes.FILTERS_PANEL)
            });
        });
    },

    onToggleClick() {
        PanelsActions.toggle(PanelTypes.FILTERS_PANEL);
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
