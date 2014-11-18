var React    = require('react/addons');
var Reflux   = require('reflux');
var config   = require('./../../../config');
var UrlStore = require('./../stores/UrlStore');

var Image = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            src: null
        };
    },

    componentWillMount: function () {
        this.listenTo(UrlStore, this._onUrlChange);
    },

    render: function () {
        if (!this.state.src) {
            return null;
        }

        return <img src={this.state.src} />
    },

    _onUrlChange: function (url) {
        this.setState({
            src: url
        });
    }
});

module.exports = Image;
