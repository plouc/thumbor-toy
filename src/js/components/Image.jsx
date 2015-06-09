import React         from 'react';
import Reflux        from 'reflux';
import UrlStore      from './../stores/UrlStore';
import ImageStore    from './../stores/ImageStore';
import LoaderActions from './../actions/LoaderActions';
import $             from 'jquery';

var ImageComponent = React.createClass({
    displayName: 'ImageComponent',

    mixins: [Reflux.ListenerMixin],

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

    onUrlChange(url) {
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
        if (!this.state.src || !ImageStore.get()) {
            return null;
        }

        return <img className="render" src={this.state.src} />;
    }
});

export default ImageComponent;
