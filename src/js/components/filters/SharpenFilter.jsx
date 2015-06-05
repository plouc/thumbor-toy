import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class SharpenFilter extends BaseFilter {
    getSettingsNodes() {
        return (
            <div className="control-group">
                <div className="control-group">
                    <label className="control-group__label">Amount</label>
                    <input className="control-group__control"
                           ref="amount" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.amount} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Radius</label>
                    <input className="control-group__control"
                           ref="radius" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.radius} />
                </div>
                <div className="control-group">
                    <label>
                        <input ref="luminance" type="checkbox"
                               onChange={this.onChange.bind(this)}
                               defaultChecked={this.props.filter.luminanceOnly} />
                        Luminance
                    </label>
                </div>
            </div>
        );
    }

    getSettings() {
        return {
            amount:        this.refs.amount.getDOMNode().value,
            radius:        this.refs.radius.getDOMNode().value,
            luminanceOnly: this.refs.luminance.getDOMNode().checked
        };
    }
}
