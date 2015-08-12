/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React             from 'react';
import { ListenerMixin } from 'reflux';
import UrlStore          from './../stores/UrlStore';
import LoaderStore       from './../stores/LoaderStore';
import SourceStore       from './../stores/SourceStore';
import PanelsActions     from './../actions/PanelsActions';
import Url               from './Url.jsx';
import PanelTypes        from './../stores/PanelTypes';


var Header = React.createClass({
    displayName: 'Header',

    mixins: [ListenerMixin],

    getInitialState() {
        return {
            url:      '',
            hasError: false,
            validUrl: SourceStore.isValid()
        };
    },

    componentWillMount() {
        this.listenTo(UrlStore,    this.onUrlUpdate);
        this.listenTo(LoaderStore, this.onLoaderUpdate);
        this.listenTo(SourceStore, this.onSourceUpdate);
    },

    onUrlUpdate(url) {
        this.setState({
            url: url
        });
    },

    onLoaderUpdate(isLoading, hasError) {
        this.setState({
            hasError: hasError
        });
    },

    onSourceUpdate() {
        this.setState({
            validUrl: SourceStore.isValid()
        });
    },

    onSettingsClick() {
        PanelsActions.open(PanelTypes.SETTINGS);
    },

    render() {
        var urlNotice = null;
        if (this.state.validUrl === false) {
            urlNotice = <div className="header__notice"><i className="fa fa-warning"/> Url is incomplete</div>;
        }

        return (
            <div className="header">
                <Url url={this.state.url} error={this.state.hasError} />
                <span className="header__settings" onClick={this.onSettingsClick}>
                    <i className="fa fa-cog"/>
                </span>
                {urlNotice}
            </div>
        );
    }
});

export default Header;
