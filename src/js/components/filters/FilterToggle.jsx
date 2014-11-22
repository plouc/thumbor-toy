var React         = require('react/addons');
var FilterActions = require('./../../actions/FilterActions');

var FilterToggle = React.createClass({
    render: function () {

        var toggle = '';
        if (this.props.expandable) {
            toggle = <span className="filter__expand" onClick={this._onToggleVisibility}>
                <i className={'fa fa-chevron-' + (this.props.expanded ? 'down' : 'right') } />
            </span>
        }

        return <div className="filter__header" onClick={this._onToggleActive}>
            <span className="filter__toggle">
                <i className={'fa fa-eye' + (this.props.filter.active ? '' : '-slash') } />
            </span>
            {this.props.filter.label}
            <span className="filter__delete" onClick={this._onDeleteClick} >
                <i className="fa fa-times" />
            </span>
            {toggle}
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
