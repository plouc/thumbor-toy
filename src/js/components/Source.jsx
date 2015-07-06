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
import SourceStore   from './../stores/SourceStore';
import SwitchControl from './form/SwitchControl.jsx';
import ChoiceControl from './form/ChoiceControl.jsx';
import TextControl   from './form/TextControl.jsx';


var Source = React.createClass({
    displayName: 'ImageSource',

    mixins: [Reflux.ListenerMixin],

    componentWillMount() {
        this.listenTo(SourceStore, () => {
            this.setState({
                server: SourceStore.server(),
                image:  SourceStore.image()
            });
            var server = _.find(this.props.source.servers, { value: SourceStore.server() });
            if (server !== undefined) {
                this.setState({
                    images: server.images
                });
            }
        });
    },

    getInitialState() {
        return {
            sourceType: 'static',
            server:     SourceStore.server(),
            image:      SourceStore.image(),
            images:     []
        };
    },

    onServerChange(key, server) {
        SourceActions.set(server, '');
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

        var servers = [{
            label: '--- select a server ---',
            value: ''
        }].concat(this.props.source.servers);

        var sourceControl;
        if (this.state.sourceType === 'static') {
            sourceControl = (
                <ChoiceControl
                    propKey="image" choices={images}
                    onChange={this.onImageChange}
                    defaultValue={this.state.image}
                />
            );
        } else {
            sourceControl = (
                <TextControl
                    propKey="image" label=""
                    fullWidth={true}
                    onChange={this.onImageChange}
                    defaultValue={this.state.image}
                />
            );
        }

        var imageSourceTypes = [
            { label: 'predefined', value: 'static'  },
            { label: 'manual',     value: 'dynamic' }
        ];

        var imageSource = null;
        if (this.state.server !== '') {
            imageSource = (
                <div>
                    <SwitchControl
                        propKey="image_source_type" label="image"
                        choices={imageSourceTypes}
                        onChange={this.onTypeChange}
                        defaultValue={this.state.sourceType}
                    />
                    {sourceControl}
                </div>
            );
        }

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
                        defaultValue={this.state.server}
                    />
                    {imageSource}
                </div>
            </div>
        );
    }
});

export default Source;
