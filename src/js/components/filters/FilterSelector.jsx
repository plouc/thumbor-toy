/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component }  from 'react';
import AvailableFiltersStore from './../../stores/AvailableFiltersStore';
import FilterActions         from './../../actions/FilterActions';


class FilterSelector extends Component {

    init() {
        this.listenTo(AvailableFiltersStore, this.render());
    }

    constructor(props) {
        super(props);
        this.state = {
            filterType: ''
        };
    }

    onChange() {
        var filterSelect = this.refs.filter.getDOMNode();
        var filterType   = filterSelect.value;
        if (filterType !== null) {
            FilterActions.add(filterType);

            this.setState({ filterType: '' });

            filterSelect.blur();
        }
    }

    render() {
        var options = AvailableFiltersStore.get().map(function (filter) {
            return <option key={filter.type} value={filter.type}>{filter.label}</option>;
        });
        options.unshift((
            <option key={0} value="">Add a filter</option>
        ));

        return (
            <div className="filter-selector">
                <div className="select-box select-box--filters">
                    <select ref="filter" onChange={this.onChange.bind(this)} value={this.state.filterType}>
                        {options}
                    </select>
                    <i className="fa fa-plus" />
                </div>
            </div>
        );
    }
}

export default FilterSelector;
