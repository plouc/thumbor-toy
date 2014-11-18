var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');

var GrayscaleFilter = React.createClass({
    render: function () {

        var cssClasses = 'filter';
        if (this.props.filter.active) {
            cssClasses += ' _is-active';
        }

        return <div className={cssClasses}>
            <label className="filter__label">
                <input ref="active" type="checkbox" onChange={this._onChange} />
                &nbsp;
                Grayscale
            </label>
        </div>
    },

    _onChange: function (e) {
        FilterActions.update('grayscale', {
            active: this.refs.active.getDOMNode().checked
        });
    }
});

module.exports = GrayscaleFilter;
