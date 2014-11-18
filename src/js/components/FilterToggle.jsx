var React         = require('react/addons');
var FilterActions = require('./../actions/FilterActions');

var FilterToggle = React.createClass({
    render: function () {
        return <div className="filter__header" onClick={this._onToggleActive}>
            <span className="filter__toggle">
                <i className={'fa fa-eye' + (this.props.filter.active ? '' : '-slash') } />
            </span>
            {this.props.filter.label}
            <span className="filter__delete" onClick={this._onDeleteClick} >
                <i className="fa fa-times" />
            </span>
            <span className="filter__expand" onClick={this._onToggleVisibility}>
                <i className={'fa fa-angle-' + (this.props.expanded ? 'down' : 'right') } />
            </span>
        </div>
    },

    _onDeleteClick: function (e) {
        e.preventDefault();
        e.stopPropagation();

        FilterActions.delete(this.props.filter.id);
    },

    _onToggleVisibility: function (e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onToggle();
    },

    _onToggleActive: function () {
        FilterActions.update(this.props.filter.id, {
            active: !this.props.filter.active
        });
    }
});

module.exports = FilterToggle;
