var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');
var FilterToggle  = require('./../FilterToggle.jsx');

var BrightnessFilter = React.createClass({
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
            <div className={'filter__settings' + (this.state.expanded ? ' _is-expanded' : '')}>
                <input className="filter__setting--text" ref="amount" onChange={this._onChange} defaultValue="0" />
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
            amount: parseInt(this.refs.amount.getDOMNode().value, 10)
        });
    }
});

module.exports = BrightnessFilter;
