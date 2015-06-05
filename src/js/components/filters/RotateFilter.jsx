import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class RotateFilter extends BaseFilter {
    getSettingsNodes() {
        return (
            <div>
                <div className="control-group">
                    <label className="control-group__label control-group__label--full">Angle</label>
                    <div className="select-box">
                        <select ref="angle" onChange={this.onChange.bind(this)}
                                defaultValue={this.props.filter.angle}>
                            <option value="0">0</option>
                            <option value="90">90</option>
                            <option value="180">180</option>
                            <option value="270">270</option>
                        </select>
                        <i className="fa fa-angle-down" />
                    </div>
                </div>
            </div>
        );
    }

    getSettings() {
        return {
            angle: parseInt(this.refs.angle.getDOMNode().value, 10)
        };
    }
}
