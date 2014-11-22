var React      = require('react/addons');
var Reflux     = require('reflux');
var config     = require('./../../../config');
var UrlStore   = require('./../stores/UrlStore');
var ImageStore = require('./../stores/ImageStore');
var $          = require('jquery');

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
        var $el     = $(this.getDOMNode());
        var $parent = $el.parent();

        $el.css({
            top:  ($parent.height() - $el.height()) / 2,
            left: ($parent.width()  - $el.width())  / 2
        });
    },

    _onUrlChange: function (url) {
        this.img.src = url;
        this.img.onload = function () {
            this.setState({
                src: url
            });
        }.bind(this);
    }
});

module.exports = ImageComponent;
