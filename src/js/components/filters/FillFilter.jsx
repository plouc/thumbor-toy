var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var FillFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <div className="control-group">
            <label className="control-group__label">color</label>
            <input className="control-group__control"
                   ref="color" type="text"
                   onChange={this._onChange}
                   defaultValue={this.props.filter.color} />
        </div>
    },

    getSettings: function () {
        return {
            color: this.refs.color.getDOMNode().value
        };
    }
});

module.exports = FillFilter;
