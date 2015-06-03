import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var FillFilter = React.createClass({
    displayName: 'FillFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">color</label>
                <input className="control-group__control"
                       ref="color" type="text"
                       onChange={this.onChange}
                       defaultValue={this.props.filter.color} />
            </div>
        );
    },

    getSettings() {
        return {
            color: this.refs.color.getDOMNode().value
        };
    }
});

export default FillFilter;
