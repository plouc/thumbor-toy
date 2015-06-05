import React      from 'react';
import BaseFilter from './BaseFilter.jsx';


export default class WatermarkFilter extends BaseFilter {
    getSettingsNodes() {
        var options = config.watermarkImages.map((image, i) => {
            return <option key={i} value={image.src}>{image.label}</option>;
        });

        return (
            <div>
                <div className="control-group">
                    <label className="control-group__label control-group__label--full">URL</label>
                    <div className="select-box">
                        <select ref="image" onChange={this.onChange.bind(this)}>
                            {options}
                        </select>
                        <i className="fa fa-angle-down" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-group__label">Position x</label>
                    <input className="control-group__control"
                           ref="x" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.x} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Position y</label>
                    <input className="control-group__control"
                           ref="y" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.x} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Alpha</label>
                    <input className="control-group__control"
                           ref="transparency" type="text"
                           onChange={this.onChange.bind(this)}
                           defaultValue={this.props.filter.transparency} />
                </div>
            </div>
        );
    }

    getSettings() {
        return {
            image:        this.refs.image.getDOMNode().value,
            x:            this.refs.x.getDOMNode().value,
            y:            this.refs.y.getDOMNode().value,
            transparency: this.refs.transparency.getDOMNode().value
        };
    }
}
