var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');

var BlurFilter = React.createClass({
    render: function () {

        var cssClasses = 'filter';
        if (this.props.filter.active) {
            cssClasses += ' _is-active';
        }

        return <div className={cssClasses}>
            <label className="filter__label">
                <input ref="active" type="checkbox" onChange={this._onChange} />
                &nbsp;
                Blur
            </label>
            <div className="filter__settings">
                <input ref="radius" onChange={this._onChange} defaultValue="1" />
            </div>
        </div>
    },

    _onChange: function (e) {
        FilterActions.update('blur', {
            active: this.refs.active.getDOMNode().checked,
            radius: parseInt(this.refs.radius.getDOMNode().value, 10)
        });
    }
});

module.exports = BlurFilter;
