var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');
var FilterToggle  = require('./../FilterToggle.jsx');

var GrayscaleFilter = React.createClass({
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

        return <div className={cssClasses}>
            <FilterToggle {...this.props} onToggle={this._onToggleSettings} expanded={this.state.expanded} />
        </div>
    },

    _onToggleSettings: function () {
        this.setState({
            expanded: !this.state.expanded
        });
    }
});

module.exports = GrayscaleFilter;
