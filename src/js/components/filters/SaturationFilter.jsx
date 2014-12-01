var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var SaturationFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <div className="control-group">
            <label className="control-group__label">amount</label>
            <input className="control-group__control"
                   ref="amount" type="text"
                   onChange={this._onChange}
                   defaultValue={this.props.filter.amount} />
        </div>
    },

    getSettings: function () {
        return {
            amount: this.refs.amount.getDOMNode().value
        };
    }
});

module.exports = SaturationFilter;
