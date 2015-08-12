/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { PropTypes } from 'react';
import _                    from 'lodash';
import Control              from './Control.jsx';


class ChoiceControl extends Control {
    onChange() {
        var { propKey, onChange } = this.props;
        var value = this.refs[propKey].getDOMNode().value;

        onChange(propKey, value);
    }

    render() {
        var { label, propKey, choices, value } = this.props;

        var options = choices.map(choice => {
            return <option key={choice.value} value={choice.value}>{choice.label}</option>;
        });

        return (
            <div className={this.props.wrapperClass}>
                <label className="control-group__label control-group__label--full">{label}</label>
                <div className="select-box">
                    <select ref={propKey} onChange={this.onChange.bind(this)} value={value}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
            </div>
        );
    }
}

ChoiceControl.propTypes = _.extend({
    choices: PropTypes.array.isRequired
}, Control.propTypes);

export default ChoiceControl;