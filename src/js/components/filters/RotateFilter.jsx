import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var RotateFilter = React.createClass({
    displayName: 'RotateFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div>
                <div className="control-group">
                    <div className="select-box">
                        <select ref="angle" onChange={this.onChange}
                                defaultValue={this.props.filter.angle}>
                            <option value="0">0</option>
                            <option value="90">90</option>
                            <option value="180">180</option>
                            <option value="270">270</option>
                        </select>
                        <i className="fa fa-angle-down" />
                    </div>
                </div>
            </div>
        );
    },

    getSettings() {
        return {
            angle: parseInt(this.refs.angle.getDOMNode().value, 10)
        };
    }
});

export default RotateFilter;
