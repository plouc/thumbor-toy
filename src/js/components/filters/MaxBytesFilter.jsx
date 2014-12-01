var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var MaxBytesFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <div className="control-group">
            <label className="control-group__label">bytes</label>
            <input className="control-group__control"
                   ref="bytes" type="text"
                   onChange={this._onChange}
                   defaultValue={this.props.filter.bytes} />
        </div>
    },

    getSettings: function () {
        return {
            bytes: parseInt(this.refs.bytes.getDOMNode().value, 10)
        };
    }
});

module.exports = MaxBytesFilter;
