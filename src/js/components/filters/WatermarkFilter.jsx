var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');
var config        = require('./../../../../config');

var WatermarkFilter = React.createClass({
    render: function () {

        var cssClasses = 'filter';
        if (this.props.filter.active) {
            cssClasses += ' _is-active';
        }

        var options = config.watermarkImages.map(function (image) {
            return <option key={image.src} value={image.src}>{image.label}</option>
        });

        return <div className={cssClasses}>
            <label className="filter__label">
                <input ref="active" type="checkbox" onChange={this._onChange} />
                &nbsp;
                Watermark
            </label>
            <div className="filter__settings">
                <select ref="image" onChange={this._onChange}>
                    {options}
                </select>
                <input ref="x" onChange={this._onChange} defaultValue="-10" />
                <input ref="y" onChange={this._onChange} defaultValue="-10" />
                <input ref="transparency" onChange={this._onChange} defaultValue="0" />
            </div>
        </div>
    },

    _onChange: function () {
        FilterActions.update(this.props.filter.id, {
            active:       this.refs.active.getDOMNode().checked,
            image:        this.refs.image.getDOMNode().value,
            x:            this.refs.x.getDOMNode().value,
            y:            this.refs.y.getDOMNode().value,
            transparency: this.refs.transparency.getDOMNode().value
        });
    }
});

module.exports = WatermarkFilter;
