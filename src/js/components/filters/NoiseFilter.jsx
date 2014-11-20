var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var NoiseFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <input className="filter__setting--text"
                      ref="amount"
                      onChange={this._onChange}
                      defaultValue="0" />
    },

    getSettings: function () {
        return {
            amount: parseInt(this.refs.amount.getDOMNode().value, 10)
        };
    }
});

module.exports = NoiseFilter;
