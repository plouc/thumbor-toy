import React, { PropTypes } from 'react';
import _                    from 'lodash';
import Control              from './Control.jsx';


class SwitchControl extends Control {
    constructor(props) {
        super(props);
        this.uid = `switch.${ SwitchControl.counter }`;
        SwitchControl.counter++;
    }

    onChange() {
        var foundValue;
        _.forOwn(this.refs, (node, value) => {
            if (node.getDOMNode().checked === true) {
                foundValue = value;
            }
        });

        this.props.onChange(this.props.propKey, foundValue);
    }

    render() {
        let { label, choices, value } = this.props;

        var nodes = [];
        choices.forEach((choice, index) => {
            var id = `${ choice.value }.${ index }`;
            nodes.push(
                <input
                    ref={choice.value} key={`${ id }.input`}
                    name={this.uid} id={id}
                    type="radio" className={`switch__radio--${index}`}
                    onChange={this.onChange.bind(this)}
                    checked={choice.value === value}
                />
            );
            nodes.push(<label key={`${ id }.label`} htmlFor={id}>{choice.label}</label>);
        });

        let labelNode = null;
        if (label && label !== '') {
            labelNode = (
                <label className="control-group__label control-group__label--full">{label}</label>
            );
        }

        return (
            <div className={this.props.wrapperClass}>
                {labelNode}
                <div className={`switch switch--${ choices.length }`}>
                    {nodes}
                    <i/>
                </div>
            </div>
        );
    }
}

// Maintain uniqueness
SwitchControl.counter = 0;

SwitchControl.propTypes = _.extend({
    choices: PropTypes.array.isRequired
}, Control.propTypes);

export default SwitchControl;