var React         = require('react/addons');
var Reflux        = require('reflux');
var ResizeActions = require('./../actions/ResizeActions');


var Resize = React.createClass({
    mixins: [Reflux.ListenerMixin],

    render: function () {
        return <div className="panel panel--resize">
            <h3 className="panel__title">
                Resize <i className="fa fa-crop" />
            </h3>
            <div className="panel__content">
                <div className="control-group">
                    <label className="resize__switch">
                        <input ref="active" type="checkbox"
                               onChange={this._onChange} />
                        active
                    </label>
                    <label className="resize__switch">
                        <input ref="debug" type="checkbox"
                               onChange={this._onChange} />
                        debug
                    </label>
                </div>
                <div className="switch">
                    <input ref="smart" type="radio"
                           id="resize_mode_smart" name="resize_mode"
                           onChange={this._onChange} />
                    <label htmlFor="resize_mode_smart">smart</label>

                    <input ref="fit" type="radio"
                           id="resize_mode_fit" name="resize_mode"
                           onChange={this._onChange} />
                    <label htmlFor="resize_mode_fit">fit</label>

                    <i />
                </div>
                <div className="control-group">
                    <label className="control-group__label">width</label>
                    <input className="control-group__control"
                           type="text" ref="height"
                           ref="width" onChange={this._onChange} defaultValue="100" />
                </div>
                <div className="control-group">
                    <label className="control-group__label">height</label>
                    <input className="control-group__control"
                           type="text" ref="height"
                           onChange={this._onChange} defaultValue="100" />
                </div>
            </div>
        </div>
    },

    _onChange: function () {
        var config = {
            active:    this.refs.active.getDOMNode().checked,
            width:     this.refs.width.getDOMNode().value,
            height:    this.refs.height.getDOMNode().value,
            smart:     this.refs.smart.getDOMNode().checked,
            debug:     this.refs.debug.getDOMNode().checked,
            fit:       this.refs.fit.getDOMNode().checked
        };

        ResizeActions.update(config);
    }
});

module.exports = Resize;
