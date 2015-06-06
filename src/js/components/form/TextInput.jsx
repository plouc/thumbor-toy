import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        var { key, label, defaultValue } = this.props.setting;
        var onChange = this.props.onChange;

        return (
            <div key={key} className="control-group">
                <label className="control-group__label">{label}</label>
                <input className="control-group__control"
                    ref={key} type="text" onChange={onChange} defaultValue={defaultValue} />
            </div>
        );
    }
}

TextInput.propTypes = {

};

export default TextInput;