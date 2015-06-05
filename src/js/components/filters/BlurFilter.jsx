import React, { PropTypes } from 'react';
import FilterMixin          from './FilterMixin';

var BlurFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">Radius</label>
                <input className="control-group__control"
                       ref="radius" type="text"
                       onChange={this.onChange}
                       defaultValue={this.props.filter.radius} />
            </div>
        );
    },

    getSettings() {
        return {
            radius: parseInt(this.refs.radius.getDOMNode().value, 10)
        };
    }
});

export default BlurFilter;
