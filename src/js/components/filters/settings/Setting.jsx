import React, { Component, PropTypes } from 'react';


class Setting extends Component {}


Setting.propTypes = {
    onChange: PropTypes.func.isRequired,
    setting:  PropTypes.shape({
        key:   PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired
};


export default Setting;
