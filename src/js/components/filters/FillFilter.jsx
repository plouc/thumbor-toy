import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var FillFilter = React.createClass({
    displayName: 'FillFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        //Color(hex)	Fill Transparent (bool)
        return (
            <div className="control-group">
                <label className="control-group__label">Color (hex)</label>
                <input className="control-group__control"
                       ref="color" type="text"
                       onChange={this.onChange}
                       defaultValue={this.props.filter.color} />
                <label>
                    <input ref="fillTransparent" type="checkbox"
                        onChange={this.onChange}
                        defaultChecked={this.props.filter.fillTransparent} />
                    Fill Transparent
                </label>
            </div>
        );
    },

    getSettings() {
        return {
            color:           this.refs.color.getDOMNode().value,
            fillTransparent: this.refs.fillTransparent.getDOMNode().checked
        };
    }
});

export default FillFilter;
