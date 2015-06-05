import React         from 'react';
import Reflux        from 'reflux';
import FiltersStore  from './../../stores/FiltersStore';
import FilterActions from './../../actions/FilterActions';


var FilterSelector = React.createClass({
    displayName: 'FilterSelector',

    mixins: [Reflux.ListenerMixin],

    onAdd() {
        var filterType = this.refs.filter.getDOMNode().value;

        FilterActions.add(filterType);
    },

    render() {
        var options = FiltersStore.available().map(function (filter) {
            return <option key={filter.type} value={filter.type}>{filter.label}</option>;
        });

        return (
            <div className="filter-selector">
                <div className="select-box select-box--filters">
                    <select ref="filter" onChange={this.onChange}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
                <span className="filter-selector__add" onClick={this.onAdd}>
                    <i className="fa fa-plus" />
                </span>
            </div>
        );
    }
});

export default FilterSelector;
