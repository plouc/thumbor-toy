import React       from 'react';
import FilterMixin from './FilterMixin';

var SaturationFilter = React.createClass({
    displayName: 'SaturationFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">Percentage (%)</label>
                <input className="control-group__control"
                       ref="amount" type="text"
                       onChange={this.onChange}
                       defaultValue={this.props.filter.amount} />
            </div>
        );
    },

    getSettings() {
        return {
            amount: this.refs.amount.getDOMNode().value
        };
    }
});

export default SaturationFilter;
