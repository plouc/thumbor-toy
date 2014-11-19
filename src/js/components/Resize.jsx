var React         = require('react/addons');
var Reflux        = require('reflux');
var ResizeActions = require('./../actions/ResizeActions');


var Resize = React.createClass({
    mixins: [Reflux.ListenerMixin],

    render: function () {
        return <div className="panel panel--resize">
            <h3 className="panel__title">
                <i className="fa fa-crop" />
                Resize
            </h3>
            <div className="panel__content">
                <div className="resize__group">
                    <label className="resize__switch">
                        <input ref="active" type="checkbox" onChange={this._onChange} />
                        active
                    </label>
                    <label className="resize__switch">
                        <input ref="fit" type="checkbox" onChange={this._onChange} />
                        fit
                    </label>
                </div>
                <div className="resize__group">
                    <label className="resize__dimension__label">width</label>
                    <input className="resize__dimension__control"
                           ref="width" onChange={this._onChange} defaultValue="100" />
                </div>
                <div className="resize__group">
                    <label className="resize__dimension__label">height</label>
                    <input className="resize__dimension__control"
                           ref="height" onChange={this._onChange} defaultValue="100" />
                </div>
                <div className="resize__group">
                    <label className="resize__switch">
                        <input ref="smart" type="checkbox" onChange={this._onChange} />
                        smart
                    </label>
                    <label className="resize__switch">
                        <input ref="debug" type="checkbox" onChange={this._onChange} />
                        debug
                    </label>
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
