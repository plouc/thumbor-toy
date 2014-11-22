var React    = require('react/addons');
var Reflux   = require('reflux');
var UrlStore = require('./../stores/UrlStore');

var Url = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            url: ''
        };
    },

    componentWillMount: function () {
        this.listenTo(UrlStore, this._onUrlChange);
    },

    render: function () {
        return <input type="text" value={this.state.url} />
    },

    _onUrlChange: function (url) {
        this.setState({
            url: url
        });
    }
});

module.exports = Url;
