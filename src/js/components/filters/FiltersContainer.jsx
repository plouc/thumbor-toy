/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component, PropTypes } from 'react';
import { DragDropContext }             from 'react-dnd';
import HTML5Backend                    from 'react-dnd/modules/backends/HTML5';
import FilterActions                   from './../../actions/FilterActions';
import SortableFilter                  from './SortableFilter.jsx';
import Filter                          from './Filter.jsx';


class FiltersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveTarget:    null,
            moveDirection: null
        };
    }

    onAbortedFilterDrop() {
        this.setState({
            moveTargetPosition: null,
            moveDirection:      null
        });
    }

    onFilterDrop(sourcePosition, targetPosition) {
        FilterActions.move(sourcePosition, targetPosition);
        this.onAbortedFilterDrop();
    }

    onFilterMove(sourcePosition, targetPosition) {
        this.setState({
            moveTargetPosition: targetPosition,
            moveDirection:      targetPosition > sourcePosition ? 'down' : 'up'
        });
    }

    render() {
        var { moveTargetPosition, moveDirection } = this.state;

        var filtersNodes = this.props.filters.map((filter, i) => {
            var cssClasses = '';
            if (moveTargetPosition !== null) {
                if (i === moveTargetPosition) {
                    cssClasses = moveDirection === 'up' ? '_insert-before' : '_insert-after';
                }
            }

            return (
                <SortableFilter key={i} position={i} uid={filter.uid}
                    onDrop={this.onFilterDrop.bind(this)} onMove={this.onFilterMove.bind(this)}
                    onAbortedDrop={this.onAbortedFilterDrop.bind(this)} cssClasses={cssClasses}
                >
                    <Filter key={filter.uid} showDescription={this.props.showFiltersDescription} filter={filter} />
                </SortableFilter>
            );
        });

        return (
            <div className="filters__container__wrapper">
                <div className="filters__container">
                    {filtersNodes}
                </div>
            </div>
        );
    }
}

FiltersContainer.propTypes = {
    showFiltersDescription: PropTypes.bool.isRequired,
    filters:                PropTypes.array.isRequired
};

export default DragDropContext(HTML5Backend)(FiltersContainer);
