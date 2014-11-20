var React       = require('react/addons');
var config      = require('./../../../../config');
var FilterMixin = require('./FilterMixin');

var WatermarkFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        var options = config.watermarkImages.map(function (image, i) {
            return <option key={i} value={image.src}>{image.label}</option>
        });

        return <div>
            <select ref="image" onChange={this._onChange}>
                {options}
            </select>
            <input className="filter__setting--text" ref="x" onChange={this._onChange} defaultValue={this.props.filter.x} />
            <input className="filter__setting--text" ref="y" onChange={this._onChange} defaultValue={this.props.filter.x} />
            <input className="filter__setting--text" ref="transparency" onChange={this._onChange} defaultValue={this.props.filter.transparency} />
        </div>
    },

    getSettings: function () {
        return {
            image:        this.refs.image.getDOMNode().value,
            x:            this.refs.x.getDOMNode().value,
            y:            this.refs.y.getDOMNode().value,
            transparency: this.refs.transparency.getDOMNode().value
        };
    }
});

module.exports = WatermarkFilter;
