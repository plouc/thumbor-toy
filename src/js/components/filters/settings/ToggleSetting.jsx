/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React   from 'react';
import Setting from './Setting.jsx';


class ToggleSetting extends Setting {
    constructor(props) {
        super(props);
        this.uid = ToggleSetting.counter;
        ToggleSetting.counter++;
    }

    onChange() {
        var { setting, onChange } = this.props;
        var value = this.refs[setting.key].getDOMNode().checked;

        onChange(setting.key, value);
    }

    render() {
        var { setting, defaultValue } = this.props;

        var id = `toggle-${this.uid}`;

        return (
            <div key={setting.key} className="control-group">
                <span className="toggle">
                    <input id={id} ref={setting.key} type="checkbox" onChange={this.onChange.bind(this)} defaultChecked={defaultValue}/>
                    <label htmlFor={id}/>
                </span>
                <label htmlFor={id}>
                    {setting.label}
                </label>
            </div>
        );
    }
}

// Maintain id uniqueness
ToggleSetting.counter = 0;

export default ToggleSetting;