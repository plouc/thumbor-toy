import React         from 'react';
import Reflux        from 'reflux';
import ResizeActions from './../actions/ResizeActions';

var Resize = React.createClass({
    displayName: 'Resize',

    mixins: [Reflux.ListenerMixin],

    props: {
        presets: React.PropTypes.array
    },

    onPresetChange(e) {
        var preset = this.props.presets[e.target.value-1];
        this.refs.width.getDOMNode().value  = preset.width;
        this.refs.height.getDOMNode().value = preset.height;
        ResizeActions.setPreset(preset);
    },

    onChange() {
        var config = {
            active: this.refs.active.getDOMNode().checked,
            width:  this.refs.width.getDOMNode().value,
            height: this.refs.height.getDOMNode().value,
            smart:  this.refs.smart.getDOMNode().checked,
            debug:  this.refs.debug.getDOMNode().checked,
            fit:    this.refs.fit.getDOMNode().checked
        };

        ResizeActions.update(config);
    },

    render() {
        var selectNode = '';

        if (this.props.presets && this.props.presets.length > 0) {
            presets = [{
                label:  '--- select an image ratio ---',
                width:  null,
                height: null
            }].concat(this.props.presets);

            var options = presets.map(function (preset, i) {
                return <option key={i} value={i}>{preset.label}</option>;
            });

            selectNode = (
                <div className="select-box">
                    <select className="control--full-width"
                        ref="presets"
                        onChange={this.onPresetChange}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
            );
        }

        return (
            <div className="panel panel--resize">
                <h3 className="panel__title">
                    Resize <i className="fa fa-crop" />
                </h3>
                <div className="panel__content">
                    <div className="control-group">
                        <label className="resize__switch">
                            <input ref="active" type="checkbox"
                                   onChange={this.onChange} />
                            active
                        </label>
                        <label className="resize__switch">
                            <input ref="debug" type="checkbox"
                                   onChange={this.onChange} />
                            debug
                        </label>
                    </div>
                    <div className="switch switch--3">
                        <input type="radio" className="switch__radio--0"
                               id="resize_mode_default" name="resize_mode"
                               defaultChecked="true"
                               onChange={this.onChange} />
                        <label htmlFor="resize_mode_default">default</label>

                        <input ref="smart" type="radio" className="switch__radio--1"
                               id="resize_mode_smart" name="resize_mode"
                               onChange={this.onChange} />
                        <label htmlFor="resize_mode_smart">smart</label>

                        <input ref="fit" type="radio" className="switch__radio--2"
                               id="resize_mode_fit" name="resize_mode"
                               onChange={this.onChange} />
                        <label htmlFor="resize_mode_fit">fit</label>

                        <i />
                    </div>
                    {selectNode}
                    <div className="control-group">
                        <label className="control-group__label">width</label>
                        <input className="control-group__control"
                               type="text" ref="height"
                               ref="width" onChange={this.onChange} defaultValue="100" />
                    </div>
                    <div className="control-group">
                        <label className="control-group__label">height</label>
                        <input className="control-group__control"
                               type="text" ref="height"
                               onChange={this.onChange} defaultValue="100" />
                    </div>
                </div>
            </div>
        );
    }
});

export default Resize;
