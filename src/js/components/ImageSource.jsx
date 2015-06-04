/**
 * This component is responsible for image source selection.
 */

import React        from 'react/addons';
import Reflux       from 'reflux';
import ImageActions from './../actions/ImageActions';

var ImageSource = React.createClass({
    displayName: 'ImageSource',

    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            static: true
        };
    },

    onTypeChange() {
        this.setState({
            static: this.refs.type_static.getDOMNode().checked
        });
    },

    onChange(e) {
        ImageActions.set(e.target.value);
    },

    render() {
        var sources = [{
            label: '--- select an image ---',
            src:   null
        }].concat(this.props.images);

        var options = sources.map((image, i) => {
            return <option key={`${ image.src }.${ i }`} value={image.src}>{image.label}</option>;
        });

        var sourceControl;
        if (this.state.static) {
            sourceControl = (
                <div className="select-box">
                <select ref="source" className="control--full-width"
                        onChange={this.onChange}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
            );
        } else {
            sourceControl = <input ref="source" type="text" className="control--full-width" onChange={this.onChange} />;
        }

        return (
            <div className="panel panel--img-src">
                <h3 className="panel__title">
                    Image <i className="fa fa-picture-o" />
                </h3>
                <div className="panel__content">
                    <div className="switch">
                        <input type="radio" ref="type_static"
                               className="switch__radio--0"
                               id="type_static" name="type"
                               onChange={this.onTypeChange}
                               checked={this.state.static} />
                        <label htmlFor="type_static">predefined</label>

                        <input type="radio" ref="type_dynamic"
                               className="switch__radio--1"
                               id="type_dynamic" name="type"
                               onChange={this.onTypeChange}
                               checked={!this.state.static} />
                        <label htmlFor="type_dynamic">manual</label>

                        <i />
                    </div>
                    {sourceControl}
                </div>
            </div>
        );
    }
});

export default ImageSource;
