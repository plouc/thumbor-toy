import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class FillFilter extends BaseFilter {
    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">Color (hex)</label>
                <input className="control-group__control"
                       ref="color" type="text"
                       onChange={this.onChange.bind(this)}
                       defaultValue={this.props.filter.color} />
                <label>
                    <input ref="fillTransparent" type="checkbox"
                        onChange={this.onChange.bind(this)}
                        defaultChecked={this.props.filter.fillTransparent} />
                    Fill Transparent
                </label>
            </div>
        );
    }

    getSettings() {
        return {
            color:           this.refs.color.getDOMNode().value,
            fillTransparent: this.refs.fillTransparent.getDOMNode().checked
        };
    }
}
