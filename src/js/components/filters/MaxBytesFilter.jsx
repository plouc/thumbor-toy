import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var MaxBytesFilter = React.createClass({
    displayName: 'MaxBytesFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <label className="control-group__label">bytes</label>
                <input className="control-group__control"
                       ref="bytes" type="text"
                       onChange={this.onChange}
                       defaultValue={this.props.filter.bytes} />
            </div>
        );
    },

    getSettings() {
        return {
            bytes: parseInt(this.refs.bytes.getDOMNode().value, 10)
        };
    }
});

export default MaxBytesFilter;
