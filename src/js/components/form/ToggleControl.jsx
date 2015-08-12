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


class ToggleControl extends Control {
    constructor(props) {
        super(props);
        this.uid = ToggleControl.counter;
        ToggleControl.counter++;
    }

    onChange() {
        var { propKey, onChange } = this.props;
        var value = this.refs[propKey].getDOMNode().checked;

        onChange(propKey, value);
    }

    render() {
        var { propKey, label, value, wrapperClass } = this.props;

        var id = `toggle-${this.uid}`;

        return (
            <div className={wrapperClass}>
                <span className="toggle">
                    <input id={id} ref={propKey} type="checkbox" onChange={this.onChange.bind(this)} checked={value}/>
                    <label htmlFor={id}/>
                </span>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
        );
    }
}

// Maintain id uniqueness
ToggleControl.counter = 0;

export default ToggleControl;