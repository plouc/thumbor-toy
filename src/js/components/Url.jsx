import React    from 'react/addons';
import Reflux   from 'reflux';
import UrlStore from './../stores/UrlStore';

var Url = React.createClass({
    displayName: 'Url',

    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            url: ''
        };
    },

    componentWillMount() {
        this.listenTo(UrlStore, this.onUrlChange);
    },

    onUrlChange(url) {
        this.setState({
            url: url
        });
    },

    render() {
        return <input type="text" readOnly value={this.state.url} />;
    }
});

export default Url;
