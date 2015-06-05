import React       from 'react';
import FilterMixin from './FilterMixin';

var ConvolutionFilter = React.createClass({
    displayName: 'ConvolutionFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return (
            <div className="control-group">
                <div className="control-group">
                    <label className="control-group__label">Matrix Items</label>
                    <input className="control-group__control"
                           ref="matrix" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.matrix} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">Number of Columns</label>
                    <input className="control-group__control"
                           ref="columns" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.columns} />
                </div>
                <label>
                    <input ref="normalize" type="checkbox"
                           onChange={this.onChange}
                           defaultChecked={this.props.filter.normalize} />
                    Should normalize
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
