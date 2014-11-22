var React       = require('react/addons');
var Reflux      = require('reflux');
var LoaderStore = require('./../stores/LoaderStore');

var Loader = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            loading: false
        };
    },

    componentWillMount: function () {
        this.listenTo(LoaderStore, this._onLoaderChange);
    },

    render: function () {
        if (this.state.loading) {
            return <span className="render__loader">loading</span>
        }

        return null;
    },

    _onLoaderChange: function (loading) {
        this.setState({
            loading: loading
        });
    }
});

module.exports = Loader;
