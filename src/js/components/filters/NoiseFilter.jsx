import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var NoiseFilter = React.createClass({
    displayName: 'NoiseFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">amount</label>
                <input className="control-group__control"
                       ref="amount" type="text"
                       onChange={this.onChange}
                       defaultValue={this.props.filter.amount} />
            </div>
        );
    },

    getSettings() {
        return {
            amount: parseInt(this.refs.amount.getDOMNode().value, 10)
        };
    }
});

export default NoiseFilter;
