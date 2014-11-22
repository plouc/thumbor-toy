var React         = require('react/addons');
var Reflux        = require('reflux');
var config        = require('./../../../config');
var UrlStore      = require('./../stores/UrlStore');
var ImageStore    = require('./../stores/ImageStore');
var LoaderActions = require('./../actions/LoaderActions');
var $             = require('jquery');

var ImageComponent = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            src: null
        };
    },

    componentWillMount: function () {
        this.img = new Image();
        this.listenTo(UrlStore, this._onUrlChange);
    },

    render: function () {
        if (!this.state.src || !ImageStore.get()) {
            return null;
        }

        return <img className="render" src={this.state.src} />
    },

    componentDidUpdate: function() {
        var $el = $(this.getDOMNode());

        $el.css({
            'margin-top':  -$el.height() / 2,
            'margin-left': -$el.width()  / 2
        });
    },

    _onUrlChange: function (url) {
        LoaderActions.loading();
        this.img.src = url;
        this.img.onload = function (e) {
            this.setState({
                src: url
            });
            LoaderActions.loaded();
        }.bind(this);

        this.img.onerror = function (e) {
            LoaderActions.loaded();
        };
    }
});

module.exports = ImageComponent;
