import React         from 'react/addons';
import FilterActions from './../../actions/FilterActions';
import FilterToggle  from './FilterToggle.jsx';

var FilterMixin = {
    getInitialState() {
        return {
            expanded: true
        };
    },

    onToggleSettings() {
        this.setState({
            expanded: !this.state.expanded
        });
    },

    onChange() {
        FilterActions.update(this.props.filter.id, this.getSettings());
    },

    getClassName() {
        return 'filter' + (this.props.filter.active ? ' _is-active' : '');
    },

    getSettingsClassName() {
        return 'filter__settings' + (this.state.expanded ? ' _is-expanded' : '');
    },

    render() {
        var settings      = '';
        var settingsNodes = this.getSettingsNodes();
        if (settingsNodes) {
            settings = (
                <div className={this.getSettingsClassName()}>
                    {settingsNodes}
                </div>
            );
        }

        return (
            <div className={this.getClassName()}>
                <FilterToggle {...this.props}
                    onToggle={this.onToggleSettings}
                    expandable={settings !== ''}
                    expanded={this.state.expanded} />
                {settings}
            </div>
        );
    }
};

export default FilterMixin;
