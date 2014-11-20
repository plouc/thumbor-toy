var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');
var FilterToggle  = require('./FilterToggle.jsx');

var FilterMixin = {
    getInitialState: function () {
        return {
            expanded: true
        };
    },

    _onToggleSettings: function () {
        this.setState({
            expanded: !this.state.expanded
        });
    },

    _onChange: function () {
        FilterActions.update(this.props.filter.id, this.getSettings());
    },

    getClassName: function () {
        return 'filter' + (this.props.filter.active ? ' _is-active' : '');
    },

    getSettingsClassName: function () {
        return 'filter__settings' + (this.state.expanded ? ' _is-expanded' : '');
    },

    render: function () {
        return <div className={this.getClassName()}>
            <FilterToggle {...this.props} onToggle={this._onToggleSettings} expanded={this.state.expanded} />
            <div className={this.getSettingsClassName()}>
                {this.getSettingsNodes()}
            </div>
        </div>
    }
};

module.exports = FilterMixin;