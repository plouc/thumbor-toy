import React       from 'react';
import FilterMixin from './FilterMixin';

var SharpenFilter = React.createClass({
    displayName: 'SharpenFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <div className="control-group">
                    <label className="control-group__label">Amount</label>
                    <input className="control-group__control"
                           ref="amount" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.amount} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Radius</label>
                    <input className="control-group__control"
                           ref="radius" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.radius} />
                </div>
                <div className="control-group">
                    <label>
                        <input ref="luminance" type="checkbox"
                               onChange={this.onChange}
                               defaultChecked={this.props.filter.luminanceOnly} />
                        Luminance
                    </label>
                </div>
            </div>
        );
    },

    getSettings() {
        return {
            amount:        this.refs.amount.getDOMNode().value,
            radius:        this.refs.radius.getDOMNode().value,
            luminanceOnly: this.refs.luminance.getDOMNode().checked
        };
    }
});

export default SharpenFilter;
