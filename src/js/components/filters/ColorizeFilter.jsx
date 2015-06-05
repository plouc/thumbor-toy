import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class ColorizeFilter extends BaseFilter {
    getSettingsNodes() {
        return (
            <div className="control-group">
                <div className="control-group">
                    <label className="control-group__label">Red (%)</label>
                    <input className="control-group__control"
                           ref="red" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.red} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Green (%)</label>
                    <input className="control-group__control"
                           ref="green" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.green} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Blue (%)</label>
                    <input className="control-group__control"
                           ref="blue" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.blue} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Fill Color (hex)</label>
                    <input className="control-group__control"
                           ref="color" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.color} />
                </div>
            </div>
        );
    }

    getSettings() {
        return {
            red:   parseInt(this.refs.red.getDOMNode().value, 10),
            green: parseInt(this.refs.green.getDOMNode().value, 10),
            blue:  parseInt(this.refs.blue.getDOMNode().value, 10),
            color: this.refs.color.getDOMNode().value
        };
    }
}
