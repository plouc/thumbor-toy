import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var FormatFilter = React.createClass({
    displayName: 'FormatFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div>
                <div className="control-group">
                    <div className="select-box">
                        <select ref="format" onChange={this.onChange}
                                defaultValue={this.props.filter.format}>
                            <option value="jpeg">jpeg</option>
                            <option value="gif">gif</option>
                            <option value="png">png</option>
                            <option value="webp">webp</option>
                        </select>
                        <i className="fa fa-angle-down" />
                    </div>
                </div>
            </div>
        );
    },

    getSettings() {
        return {
            format: this.refs.format.getDOMNode().value
        };
    }
});

export default FormatFilter;
