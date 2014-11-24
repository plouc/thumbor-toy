/**
 * This component is responsible for image source selection.
 */

var React        = require('react/addons');
var Reflux       = require('reflux');
var config       = require('./../../../config');
var ImageActions = require('./../actions/ImageActions');

var ImageSource = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            static: true
        };
    },

    render: function () {
        var sources = [{
            label: '--- select an image ---',
            src:   null
        }].concat(config.images);

        var options = sources.map(function (image) {
            return <option key={image.src} value={image.src}>{image.label}</option>
        });

        var sourceControl;
        if (this.state.static) {
            sourceControl = <div className="select-box">
                <select ref="source" className="control--full-width"
                        onChange={this._onChange}>
                    {options}
                </select>
                <i className="fa fa-angle-down" />
            </div>
        } else {
            sourceControl = <input ref="source" type="text"
                                   className="control--full-width"
                                   onChange={this._onChange} />
        }

        return <div className="panel panel--img-src">
            <h3 className="panel__title">
                Image <i className="fa fa-picture-o" />
            </h3>
            <div className="panel__content">
                <div className="switch">
                    <input type="radio" ref="type_static"
                           className="switch__radio--0"
                           id="type_static" name="type"
                           onChange={this._onTypeChange}
                           checked={this.state.static} />
                    <label htmlFor="type_static">predefined</label>

                    <input type="radio" ref="type_dynamic"
                           className="switch__radio--1"
                           id="type_dynamic" name="type"
                           onChange={this._onTypeChange}
                           checked={!this.state.static} />
                    <label htmlFor="type_dynamic">manual</label>

                    <i />
                </div>
                {sourceControl}
            </div>
        </div>;
    },

    _onTypeChange: function (e) {
        this.setState({
            static: this.refs.type_static.getDOMNode().checked
        });
    },

    _onChange: function (e) {
        ImageActions.set(e.target.value);
    }
});

module.exports = ImageSource;
