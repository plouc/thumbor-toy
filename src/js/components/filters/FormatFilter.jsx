var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var FormatFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return <div>
            <div className="control-group">
                <div className="select-box">
                    <select ref="format" onChange={this._onChange}
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
    },

    getSettings: function () {
        return {
            format: this.refs.format.getDOMNode().value
        };
    }
});

module.exports = FormatFilter;
