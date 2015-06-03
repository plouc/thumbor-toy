import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var RgbFilter = React.createClass({
    displayName: 'RgbFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <div className="control-group">
                    <label className="control-group__label">Red Amount</label>
                    <input className="control-group__control"
                           ref="red" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.red} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Green Amount</label>
                    <input className="control-group__control"
                           ref="green" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.green} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Blue Amount</label>
                    <input className="control-group__control"
                           ref="blue" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.blue} />
                </div>
            </div>
        );
    },

    getSettings() {
        return {
            red:   parseInt(this.refs.red.getDOMNode().value, 10),
            green: parseInt(this.refs.green.getDOMNode().value, 10),
            blue:  parseInt(this.refs.blue.getDOMNode().value, 10)
        };
    }
});

export default RgbFilter;
