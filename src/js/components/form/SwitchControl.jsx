import React   from 'react';
import _       from 'lodash';
import Control from './Control.jsx';


class Switch extends Control {
    constructor(props) {
        super(props)
        this.uid = `switch.${ Switch.counter }`;
        Switch.counter++;
    }

    onChange() {
        var foundValue;
        _.forOwn(this.refs, (node, value) => {
            if (node.getDOMNode().checked === true) {
                foundValue = value;
            }
        });

        this.props.onChange(this.props.setting.key, foundValue);
    }

    render() {
        var classes = `switch switch--${ this.props.options.length }`;

        var nodes = [];
        this.props.options.forEach((option, index) => {
            var id = `${ option.value }.${ index }`;
            nodes.push(
                <input
                    ref={option.value} key={`${ id }.input`}
                    name={this.uid} id={id}
                    type="radio" className={`switch__radio--${index}`}
                    onChange={this.onChange.bind(this)}
                    defaultChecked={option.value === this.props.defaultValue}
                />
            );
            nodes.push(<label key={`${ id }.label`} htmlFor={id}>{option.label}</label>);
        });

        return (
            <div>
                <div className={classes}>
                    {nodes}
                    <i/>
                </div>
            </div>
        );
    }
}

// Maintain uniqueness
Switch.counter = 0;

export default Switch;