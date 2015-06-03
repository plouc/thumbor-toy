import React       from 'react/addons';
import FilterMixin from './FilterMixin';

var ConvolutionFilter = React.createClass({
    displayName: 'ConvolutionFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <div className="control-group">
                    <label className="control-group__label">matrix</label>
                    <input className="control-group__control"
                           ref="matrix" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.matrix} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">columns</label>
                    <input className="control-group__control"
                           ref="columns" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.columns} />
                </div>
                <label>
                    <input ref="normalize" type="checkbox"
                           onChange={this.onChange}
                           defaultChecked={this.props.filter.normalize} />
                    normalize
                </label>
            </div>
        );
    },

    getSettings() {
        return {
            matrix:    this.refs.matrix.getDOMNode().value,
            columns:   parseInt(this.refs.columns.getDOMNode().value, 10),
            normalize: this.refs.normalize.getDOMNode().checked
        };
    }
});

export default ConvolutionFilter;
