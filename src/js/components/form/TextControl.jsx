/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React   from 'react';
import Control from './Control.jsx';


export default class TextControl extends Control {
    onChange() {
        var { setting, onChange } = this.props;
        var value = this.refs[setting.key].getDOMNode().value;

        onChange(setting.key, value);
    }

    render() {
        var { setting, defaultValue } = this.props;

        return (
            <div key={setting.key} className={this.props.wrapperClass}>
                <label className="control-group__label">{setting.label}</label>
                <input className="control-group__control"
                    ref={setting.key} type="text"
                    onChange={this.onChange.bind(this)}
                    defaultValue={defaultValue} />
            </div>
        );
    }
}
