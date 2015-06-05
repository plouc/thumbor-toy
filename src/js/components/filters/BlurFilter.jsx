import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class BlurFilter extends BaseFilter {
    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">Radius</label>
                <input className="control-group__control"
                    ref="radius" type="text"
                    onChange={this.onChange.bind(this)}
                    defaultValue={this.props.filter.radius} />
            </div>
        );
    }

    getSettings() {
        return {
            radius: parseInt(this.refs.radius.getDOMNode().value, 10)
        };
    }
}