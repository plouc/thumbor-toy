/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React         from 'react';
import FilterActions from './../../actions/FilterActions';

var FilterToggle = React.createClass({
    displayName: 'FilterToggle',

    propTypes: {
        filter:       React.PropTypes.shape({
            uid:      React.PropTypes.number.isRequired,
            label:    React.PropTypes.string.isRequired,
            active:   React.PropTypes.bool.isRequired,
            expanded: React.PropTypes.bool.isRequired
        }).isRequired
    },

    onDeleteClick(e) {
        e.preventDefault();
        e.stopPropagation();

        FilterActions.delete(this.props.filter.uid);
    },

    onToggleVisibility(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onToggle();
    },

    onToggleActive() {
        FilterActions.toggle(this.props.filter.uid);
    },

    render() {
        return (
            <div className="filter__header" onClick={this.onToggleActive}>
                <span className="filter__toggle">
                    <i className={'fa fa-eye' + (this.props.filter.active ? '' : '-slash') } />
                </span>
                {this.props.filter.label}
                <span className="filter__delete" onClick={this.onDeleteClick} >
                    <i className="fa fa-times" />
                </span>
                <span className="filter__expand" onClick={this.onToggleVisibility}>
                    <i className={'fa fa-chevron-' + (this.props.filter.expanded ? 'down' : 'right') } />
                </span>
            </div>
        );
    }
});

export default FilterToggle;
