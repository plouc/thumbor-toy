import React   from 'react';
import Setting from './Setting.jsx';


export default class TextSetting extends Setting {
    onChange() {
        var { setting, onChange } = this.props;
        var value = this.refs[setting.key].getDOMNode().value;

        onChange(setting.key, value);
    }

    render() {
        var { setting, defaultValue } = this.props;

        return (
            <div key={setting.key} className="control-group">
                <label className="control-group__label">{setting.label}</label>
                <input className="control-group__control"
                    ref={setting.key} type="text"
                    onChange={this.onChange.bind(this)}
                    defaultValue={defaultValue} />
            </div>
        );
    }
}
