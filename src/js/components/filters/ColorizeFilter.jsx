var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var ColorizeFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <div className="control-group">
            <div className="control-group">
                <label className="control-group__label">red</label>
                <input className="control-group__control"
                       ref="red" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.red} />
            </div>
            <div className="control-group">
                <label className="control-group__label">green</label>
                <input className="control-group__control"
                       ref="green" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.green} />
            </div>
            <div className="control-group">
                <label className="control-group__label">blue</label>
                <input className="control-group__control"
                       ref="blue" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.blue} />
            </div>
            <div className="control-group">
                <label className="control-group__label">color</label>
                <input className="control-group__control"
                       ref="color" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.color} />
            </div>
        </div>
    },

    getSettings: function () {
        return {
            red:   parseInt(this.refs.red.getDOMNode().value, 10),
            green: parseInt(this.refs.green.getDOMNode().value, 10),
            blue:  parseInt(this.refs.blue.getDOMNode().value, 10),
            color: this.refs.color.getDOMNode().value
        };
    }
});

module.exports = ColorizeFilter;
