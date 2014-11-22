var React         = require('react/addons');
var Reflux        = require('reflux');
var config        = require('./../../../../config');
var FiltersStore  = require('./../../stores/FiltersStore');
var FilterActions = require('./../../actions/FilterActions');


var FilterSelector = React.createClass({
    mixins: [Reflux.ListenerMixin],

    render: function () {
        var options = FiltersStore.available().map(function (filter) {
            return <option key={filter.type} value={filter.type}>{filter.label}</option>
        });

        return <div className="filters__selector">
            <div className="select-box select-box--filters">
                <select ref="filter" onChange={this._onChange}>
                    {options}
                </select>
                <i className="fa fa-angle-down" />
            </div>
            <span className="filters__selector__add" onClick={this._onAdd}>
                <i className="fa fa-plus" />
            </span>
        </div>
    },

    _onAdd: function () {
        var filterType = this.refs.filter.getDOMNode().value;

        FilterActions.add(filterType);
    }
});

module.exports = FilterSelector;
