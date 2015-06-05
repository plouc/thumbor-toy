import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class MaxBytesFilter extends BaseFilter {
    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">Max Number (bytes)</label>
                <input className="control-group__control"
                       ref="bytes" type="text"
                       onChange={this.onChange.bind(this)}
                       defaultValue={this.props.filter.bytes} />
            </div>
        );
    }

    getSettings() {
        return {
            bytes: parseInt(this.refs.bytes.getDOMNode().value, 10)
        };
    }
}
