import React, { PropTypes } from 'react';
import _                    from 'lodash';
import Control              from './Control.jsx';


class SwitchControl extends Control {
    constructor(props) {
        super(props)
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
        var classes = `switch switch--${ this.props.choices.length }`;

        var nodes = [];
        this.props.choices.forEach((choice, index) => {
            var id = `${ choice.value }.${ index }`;
            nodes.push(
                <input
                    ref={choice.value} key={`${ id }.input`}
                    name={this.uid} id={id}
                    type="radio" className={`switch__radio--${index}`}
                    onChange={this.onChange.bind(this)}
                    defaultChecked={choice.value === this.props.defaultValue}
                />
            );
            nodes.push(<label key={`${ id }.label`} htmlFor={id}>{choice.label}</label>);
        });

        var label = null;
        if (this.props.label && this.props.label !== '') {
            label = (
                <label className="control-group__label control-group__label--full">{this.props.label}</label>
            );
        }

        return (
            <div className={this.props.wrapperClass}>
                {label}
                <div className={classes}>
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