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


class ChoiceControl extends Control {
    onChange() {
        var { setting, onChange } = this.props;
        var value = this.refs[setting.key].getDOMNode().value;

        onChange(setting.key, value);
    }

    render() {
        var { setting, defaultValue } = this.props;

        var options = setting.choices.map(choice => {
            return <option key={choice.value} value={choice.value}>{choice.label}</option>;
        });

        return (
            <div key={setting.key} className={this.props.wrapperClass}>
                <label className="control-group__label control-group__label--full">{setting.label}</label>
                <div className="select-box">
                    <select ref={setting.key} onChange={this.onChange.bind(this)} defaultValue={defaultValue}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
            </div>
        );
    }
}

export default ChoiceControl;