var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var BlurFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <input className="filter__setting--text"
                      ref="radius"
                      onChange={this._onChange}
                      defaultValue={this.props.filter.radius} />
    },

    getSettings: function () {
        return {
            radius: parseInt(this.refs.radius.getDOMNode().value, 10)
        };
    }
});

module.exports = BlurFilter;
