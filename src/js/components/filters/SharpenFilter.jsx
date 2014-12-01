var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var SharpenFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <div className="control-group">
            <div className="control-group">
                <label className="control-group__label">amount</label>
                <input className="control-group__control"
                       ref="amount" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.amount} />
            </div>
            <div className="control-group">
                <label className="control-group__label">radius</label>
                <input className="control-group__control"
                       ref="radius" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.radius} />
            </div>
            <div className="control-group">
                <label>
                    <input ref="luminance" type="checkbox"
                           onChange={this._onChange}
                           defaultChecked={this.props.filter.luminanceOnly} />
                    luminance only
                </label>
            </div>
        </div>
    },

    getSettings: function () {
        return {
            amount:        this.refs.amount.getDOMNode().value,
            radius:        this.refs.radius.getDOMNode().value,
            luminanceOnly: this.refs.luminance.getDOMNode().checked
        };
    }
});

module.exports = SharpenFilter;
