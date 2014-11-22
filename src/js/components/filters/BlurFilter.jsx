var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var BlurFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <div className="control-group">
            <label className="control-group__label">radius</label>
            <input className="control-group__control"
                   ref="radius" type="text"
                   onChange={this._onChange}
                   defaultValue={this.props.filter.radius} />
        </div>
    },

    getSettings: function () {
        return {
            radius: parseInt(this.refs.radius.getDOMNode().value, 10)
        };
    }
});

module.exports = BlurFilter;
