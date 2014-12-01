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
            <div className="control-group">
                <div className="select-box">
                    <select ref="image" onChange={this._onChange}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
            </div>
            <div className="control-group">
                <label className="control-group__label">left</label>
                <input className="control-group__control"
                       ref="x" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.x} />
            </div>
            <div className="control-group">
                <label className="control-group__label">top</label>
                <input className="control-group__control"
                       ref="y" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.x} />
            </div>
            <div className="control-group">
                <label className="control-group__label">transparency</label>
                <input className="control-group__control"
                       ref="transparency" type="text"
                       onChange={this._onChange}
                       defaultValue={this.props.filter.transparency} />
            </div>
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
