/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React             from 'react';
import { ListenerMixin } from 'reflux';
import _                 from 'lodash';
import queryString       from 'query-string';
import SourceActions     from './../actions/SourceActions';
import SourceStore       from './../stores/SourceStore';
import SwitchControl     from './form/SwitchControl.jsx';
import ChoiceControl     from './form/ChoiceControl.jsx';
import TextControl       from './form/TextControl.jsx';


const imageSourceTypeChoices = [
    //{ label: 'predefined', value: 'static'  },
    { label: 'manual',     value: 'dynamic' }
];


const Source = React.createClass({
    displayName: 'ImageSource',

    mixins: [ListenerMixin],

    componentWillMount() {
        this.listenTo(SourceStore, () => {

            this.setState({
                server: SourceStore.server(),
                image:  SourceStore.image()
            });

            let server = _.find(this.props.source.servers, { value: SourceStore.server() });
            if (server !== undefined) {
                this.setState({
                    images: server.images
                });
            }

        });
    },

    getInitialState() {
        if (this.props.source.servers.length === 1) {
             SourceStore.setServer(this.props.source.servers[0].value)
        }

        var qs = queryString.parse(window.location.search)
        if (qs.SourceImageUrl) {
            SourceStore.setImage(qs.SourceImageUrl)
        }

        return {
            //sourceType: 'static',
            sourceType: 'dynamic',
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
        let { images, image, server, sourceType } = this.state;

        let imageChoices = [{
            label: '--- select an image ---',
            value: ''
        }].concat(images);

        let serverSource = null;
        if (this.props.source.servers.length === 1) {

            serverSource = (
                <TextControl
                    propKey="server" label={this.props.source.servers[0].label}
                    onChange={this.onServerChange}
                    value={server}
                />
            );

        } else{
            let serverChoices = [{
                label: '--- select a server ---',
                value: ''
            }].concat(this.props.source.servers);
            serverSource = (
                    <ChoiceControl
                        label="server"
                        propKey="server" choices={serverChoices}
                        onChange={this.onServerChange}
                        value={server}
                    />
            );
        }

        var sourceControl;
        if (sourceType === 'static') {
            sourceControl = (
                <ChoiceControl
                    propKey="image" choices={imageChoices}
                    onChange={this.onImageChange}
                    value={image}
                />
            );
        } else {
            sourceControl = (
                <TextControl
                    propKey="image" label=""
                    fullWidth={true}
                    onChange={this.onImageChange}
                    value={image}
                />
            );
        }

        let imageSource = null;

        if (server !== '') {

            imageSource = (
                <div>
                    <SwitchControl
                        propKey="image_source_type" label="image"
                        choices={imageSourceTypeChoices}
                        onChange={this.onTypeChange}
                        value={sourceType}
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
                    {serverSource}
                    {imageSource}
                </div>
            </div>
        );
    }
});

export default Source;
