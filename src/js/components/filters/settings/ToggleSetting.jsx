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


export default class ToggleSetting extends Setting {
    onChange() {
        var { setting, onChange } = this.props;
        var value = this.refs[setting.key].getDOMNode().checked;

        onChange(setting.key, value);
    }

    render() {
        var { setting, defaultValue } = this.props;

        return (
            <div key={setting.key} className="control-group">
                <label>
                    <input ref={setting.key} type="checkbox"
                        onChange={this.onChange.bind(this)}
                        defaultChecked={defaultValue} />
                    {setting.label}
                </label>
            </div>
        );
    }
}
