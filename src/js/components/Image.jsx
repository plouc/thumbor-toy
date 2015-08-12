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
import UrlStore          from './../stores/UrlStore';
import SourceStore       from './../stores/SourceStore';
import LoaderActions     from './../actions/LoaderActions';
import $                 from 'jquery';

var ImageComponent = React.createClass({
    displayName: 'ImageComponent',

    mixins: [ListenerMixin],

    getInitialState() {
        return {
            src: null
        };
    },

    componentWillMount() {
        this.img = new Image();
        this.listenTo(UrlStore, this.onUrlChange);
    },

    componentDidUpdate() {
        var $el = $(this.getDOMNode());

        $el.css({
            'margin-top':  -$el.height() / 2,
            'margin-left': -$el.width()  / 2
        });
    },

    onUrlChange() {
        if (SourceStore.isValid() === false) {
            LoaderActions.loaded();
            this.setState({
                src: null
            });

            return;
        }

        var url = UrlStore.get();
        LoaderActions.loading();
        this.img.src = url;
        this.img.onload = (e) => {
            this.setState({ src: url });
            LoaderActions.loaded();
        };

        this.img.onerror = function (e) {
            LoaderActions.errored();
        };
    },

    render() {
        if (!this.state.src) {
            return null;
        }

        return <img className="render" src={this.state.src} />;
    }
});

export default ImageComponent;
