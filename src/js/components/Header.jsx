/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React         from 'react';
import Reflux        from 'reflux';
import UrlStore      from './../stores/UrlStore';
import LoaderStore   from './../stores/LoaderStore';
import PanelsActions from './../actions/PanelsActions';
import Url           from './Url.jsx';
import PanelTypes    from './../stores/PanelTypes';


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

    onSettingsClick() {
        PanelsActions.open(PanelTypes.SETTINGS);
    },

    render() {
        return (
            <div className="header">
                <Url url={this.state.url} error={this.state.hasError} />
                <span className="header__settings" onClick={this.onSettingsClick}>
                    <i className="fa fa-cog"/>
                </span>
            </div>
        );
    }
});

export default Header;
