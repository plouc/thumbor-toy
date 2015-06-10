import React       from 'react';
import Reflux      from 'reflux';
import UrlStore    from './../stores/UrlStore';
import LoaderStore from './../stores/LoaderStore';
import Url         from './Url.jsx';


var Header = React.createClass({
    displayName: 'Header',

    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            url:      '',
            hasError: false
        };
    },

    componentWillMount() {
        this.listenTo(UrlStore,    this.onUrlChange);
        this.listenTo(LoaderStore, this.onLoaderStore);
    },

    onUrlChange(url) {
        this.setState({
            url: url
        });
    },

    onLoaderStore(isLoading, hasError) {
        this.setState({
            hasError: hasError
        });
    },

    render() {
        return (
            <div className="header">
                <Url url={this.state.url} error={this.state.hasError} />
                <span className="header__settings">
                    <i className="fa fa-cog"/>
                </span>
            </div>
        );
    }
});

export default Header;
