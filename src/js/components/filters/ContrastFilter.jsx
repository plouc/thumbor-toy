import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class ContrastFilter extends BaseFilter {
    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">Amount</label>
                <input className="control-group__control"
                       ref="amount" type="text"
                       onChange={this.onChange.bind(this)}
                       defaultValue={this.props.filter.amount} />
            </div>
        );
    }

    getSettings() {
        return {
            amount: parseInt(this.refs.amount.getDOMNode().value, 10)
        };
    }
}
