/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React         from 'react';
import Reflux        from 'reflux';
import _             from 'lodash';
import SourceActions from './../actions/SourceActions';
import SwitchControl from './form/SwitchControl.jsx';
import ChoiceControl from './form/ChoiceControl.jsx';
import TextControl   from './form/TextControl.jsx';


var Source = React.createClass({
    displayName: 'ImageSource',

    getInitialState() {
        return {
            sourceType: 'static',
            images:     []
        };
    },

    onServerChange(key, server) {
        SourceActions.setServer(server);
        var server = _.find(this.props.config.servers, { value: server });
        if (server !== undefined) {
            this.setState({
                images: server.images
            });
        }
    },

    onTypeChange(key, type) {
        this.setState({
            sourceType: type
        });
    },

    onImageChange(key, image) {
        SourceActions.setImage(image);
    },

    render() {
        var images = [{
            label: '--- select an image ---',
            value: ''
        }].concat(this.state.images);

        var sourceControl;
        if (this.state.sourceType === 'static') {
            sourceControl = (
                <ChoiceControl
                    propKey="image" choices={images}
                    onChange={this.onImageChange}
                />
            );
        } else {
            sourceControl = (
                <TextControl
                    propKey="image" label=""
                    fullWidth={true}
                    onChange={this.onImageChange}
                />
            );
        }

        var servers = [{
            label: '--- select a server ---',
            value: ''
        }].concat(this.props.config.servers);

        var imageSourceTypes = [
            { label: 'predefined', value: 'static'  },
            { label: 'manual',     value: 'dynamic' }
        ];

        return (
            <div className="panel panel--img-src">
                <h3 className="panel__title">
                    Image Source <i className="fa fa-picture-o" />
                </h3>
                <div className="panel__content">
                    <ChoiceControl
                        label="server"
                        propKey="server" choices={servers}
                        onChange={this.onServerChange}
                    />
                    <SwitchControl
                        propKey="image_source_type" label="image"
                        choices={imageSourceTypes}
                        onChange={this.onTypeChange}
                        defaultValue={this.state.sourceType}
                    />
                    {sourceControl}
                </div>
            </div>
        );
    }
});

export default Source;
