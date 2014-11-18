var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');
var config        = require('./../../../../config');
var FilterToggle  = require('./../FilterToggle.jsx');

var WatermarkFilter = React.createClass({
    getInitialState: function () {
        return {
            expanded: true
        };
    },

    render: function () {
        var cssClasses = 'filter';
        if (this.props.filter.active) {
            cssClasses += ' _is-active';
        }

        var options = config.watermarkImages.map(function (image, i) {
            return <option key={i} value={image.src}>{image.label}</option>
        });

        return <div className={cssClasses}>
            <FilterToggle {...this.props} onToggle={this._onToggleSettings} expanded={this.state.expanded} />
            <div className={'filter__settings' + (this.state.expanded ? ' _is-expanded' : '')}>
                <select ref="image" onChange={this._onChange}>
                    {options}
                </select>
                <input className="filter__setting--text" ref="x" onChange={this._onChange} defaultValue={this.props.filter.x} />
                <input className="filter__setting--text" ref="y" onChange={this._onChange} defaultValue={this.props.filter.x} />
                <input className="filter__setting--text" ref="transparency" onChange={this._onChange} defaultValue={this.props.filter.transparency} />
            </div>
        </div>
    },

    _onToggleSettings: function () {
        this.setState({
            expanded: !this.state.expanded
        });
    },

    _onChange: function () {
        FilterActions.update(this.props.filter.id, {
            image:        this.refs.image.getDOMNode().value,
            x:            this.refs.x.getDOMNode().value,
            y:            this.refs.y.getDOMNode().value,
            transparency: this.refs.transparency.getDOMNode().value
        });
    }
});

module.exports = WatermarkFilter;
