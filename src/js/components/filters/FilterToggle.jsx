import React         from 'react/addons';
import FilterActions from './../../actions/FilterActions';

var FilterToggle = React.createClass({
    displayName: 'FilterToggle',

    onDeleteClick(e) {
        e.preventDefault();
        e.stopPropagation();

        FilterActions.delete(this.props.filter.id);
    },

    onToggleVisibility(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onToggle();
    },

    onToggleActive() {
        FilterActions.update(this.props.filter.id, {
            active: !this.props.filter.active
        });
    },

    render() {
        var toggle = '';
        if (this.props.expandable) {
            toggle = (
                <span className="filter__expand" onClick={this.onToggleVisibility}>
                    <i className={'fa fa-chevron-' + (this.props.expanded ? 'down' : 'right') } />
                </span>
            );
        }

        return (
            <div className="filter__header" onClick={this.onToggleActive}>
                <span className="filter__toggle">
                    <i className={'fa fa-eye' + (this.props.filter.active ? '' : '-slash') } />
                </span>
                {this.props.filter.label}
                <span className="filter__delete" onClick={this.onDeleteClick} >
                    <i className="fa fa-times" />
                </span>
                {toggle}
            </div>
        );
    }
});

export default FilterToggle;
