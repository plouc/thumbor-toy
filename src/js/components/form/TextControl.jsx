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


class TextControl extends Control {
    onChange() {
        let { propKey, onChange } = this.props;
        let value = this.refs[propKey].getDOMNode().value;

        onChange(propKey, value);
    }

    render() {
        var { propKey, label, wrapperClass, value } = this.props;

        var inputClasses = 'control-group__control';
        var labelClasses = 'control-group__label';

        if (this.props.fullWidth && this.props.fullWidth === true) {
            inputClasses += ' control-group__control--full';
            labelClasses += ' control-group__label--full';
        }

        var labelNode = null;
        if (label && label !== '') {
            labelNode = <label className={labelClasses}>{label}</label>;
        }

        return (
            <div className={wrapperClass}>
                {labelNode}
                <input className={inputClasses}
                    ref={propKey} type="text"
                    onChange={this.onChange.bind(this)}
                    value={value} />
            </div>
        );
    }
}

export default TextControl;
