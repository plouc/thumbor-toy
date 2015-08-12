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
import FiltersStore           from './../../stores/FiltersStore';
import UserPreferencesStore   from './../../stores/UserPreferencesStore';
import UserPreferencesTypes   from './../../stores/UserPreferencesTypes';
import UserPreferencesActions from './../../actions/UserPreferencesActions';
import FilterSelector         from './FilterSelector.jsx';
import FiltersContainer       from './FiltersContainer.jsx';

var Filters = React.createClass({
    displayName: 'Filters',

    mixins: [ListenerMixin],

    getInitialState() {
        return {
            filters:                [],
            showFiltersDescription: UserPreferencesStore.get(UserPreferencesTypes.SHOW_FILTERS_DESCRIPTION)
        };
    },

    componentWillMount() {
        this.listenTo(FiltersStore,         this.onFiltersChange);
        this.listenTo(UserPreferencesStore, this.onUserPreferencesChange);
    },

    onFiltersChange() {
        this.setState({
            filters: FiltersStore.current()
        });
    },

    onUserPreferencesChange() {
        this.setState({
            showFiltersDescription: UserPreferencesStore.get(UserPreferencesTypes.SHOW_FILTERS_DESCRIPTION)
        });
    },

    render() {
        let { filters, showFiltersDescription } = this.state;

        return (
            <div className="filters__list">
                <h3 className="panel__title">
                    Filters <i className="fa fa-magic" />
                </h3>
                <div className="panel__content panel__content--filter-selector">
                    <FilterSelector />
                </div>
                <FiltersContainer showFiltersDescription={showFiltersDescription} filters={filters}/>
            </div>
        );
    }
});

export default Filters;
