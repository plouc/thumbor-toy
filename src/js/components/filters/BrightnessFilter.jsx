var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');

var BrightnessFilter = React.createClass({
    render: function () {

        var cssClasses = 'filter';
        if (this.props.filter.active) {
            cssClasses += ' _is-active';
        }

        return <div className={cssClasses}>
            <label className="filter__label">
                <input ref="active" type="checkbox" onChange={this._onChange} />
                &nbsp;
                Brightness
            </label>
            <div className="filter__settings">
                <input ref="amount" onChange={this._onChange} defaultValue="0" />
            </div>
        </div>
    },

    _onChange: function () {
        FilterActions.update(this.props.filter.id, {
            active: this.refs.active.getDOMNode().checked,
            amount: parseInt(this.refs.amount.getDOMNode().value, 10)
        });
    }
});

module.exports = BrightnessFilter;
