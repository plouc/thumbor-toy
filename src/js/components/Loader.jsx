import React       from 'react';
import Reflux      from 'reflux';
import LoaderStore from './../stores/LoaderStore';

var Loader = React.createClass({
    displayName: 'Loader',

    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            loading: false
        };
    },

    componentWillMount() {
        this.listenTo(LoaderStore, this.onLoaderChange);
    },

    onLoaderChange(loading) {
        this.setState({
            loading: loading
        });
    },

    render() {
        if (this.state.loading) {
            return <span className="render__loader">loading</span>;
        }

        return null;
    }
});

export default Loader;
