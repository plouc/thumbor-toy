import React, { Component } from 'react';
import FiltersStore         from './../../stores/FiltersStore';
import FilterActions        from './../../actions/FilterActions';


class FilterSelector extends Component {
    onAdd() {
        var filterType = this.refs.filter.getDOMNode().value;

        FilterActions.add(filterType);
    }

    render() {
        var options = FiltersStore.available().map(function (filter) {
            return <option key={filter.type} value={filter.type}>{filter.label}</option>;
        });

        return (
            <div className="filter-selector">
                <div className="select-box select-box--filters">
                    <select ref="filter">
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
                <span className="filter-selector__add" onClick={this.onAdd.bind(this)}>
                    <i className="fa fa-plus" />
                </span>
            </div>
        );
    }
}

export default FilterSelector;
