import React, { Component, PropTypes } from 'react';
import { DragDropContext }             from 'react-dnd';
import HTML5Backend                    from 'react-dnd/modules/backends/HTML5';
import FilterActions                   from './../../actions/FilterActions';

import Filter from './Filter.jsx';


class FiltersContainer extends Component {
    onFilterDrop(sourceId, targetId) {
        FilterActions.move(sourceId, targetId);
    }



    render() {
        var filtersNodes = this.props.filters.map((filter, i) => {
            return React.createElement(Filter, {
                key:          i,
                id:           i,
                onFilterDrop: this.onFilterDrop
            },  React.createElement(filter.component, {
                    showDescription: this.props.showFiltersDescription,
                    filter:          filter,
                    key:             filter.uid
                })
            );
        });

        return (
            <div>
                {filtersNodes}
            </div>
        );
    }
}

FiltersContainer.propTypes = {
    showFiltersDescription: PropTypes.bool.isRequired,
    filters:                PropTypes.array.isRequired
};

export default DragDropContext(HTML5Backend)(FiltersContainer);
