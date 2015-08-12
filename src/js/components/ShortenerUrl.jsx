/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react';
import { ListenerMixin }    from 'reflux';
import ReactZeroClipboard   from 'react-zeroclipboard';
import UrlShortenerStore    from './../stores/UrlShortenerStore';
import UrlActions           from './../actions/UrlActions';


const ShortenerUrl = React.createClass({
    displayName: 'ShortenerUrl',

    mixins: [ListenerMixin],

    getInitialState() {
        return {
            url:     '',
            loading: false,
            notice:  false
        };
    },

    componentWillMount() {
        this.listenTo(UrlShortenerStore, this.onUrlUpdate);
    },

    onUrlUpdate() {
        this.setState({
            url:     UrlShortenerStore.get(),
            loading: UrlShortenerStore.isLoading()
        });
    },

    onAfterCopy() {
        this.setState({
            notice: true
        });
    },

    onCopyHover() {
        this.setState({
            notice: false
        });
    },

    onShortenClick() {
        UrlActions.shorten();
    },

    render() {
        let placeholderText = 'shortened url';
        if (this.state.loading === true) {
            placeholderText = 'loading';
        }

        let iconClasses = 'fa fa-';
        if (this.state.loading === true) {
            iconClasses += 'circle-o-notch fa-spin';
        } else {
            iconClasses += 'chevron-right';
        }

        return (
            <div className="url url--shortened">
                <span className="url__shorten" onClick={this.onShortenClick}>
                    <i className={iconClasses}/>
                </span>
                <input className="url__field" type="text" readOnly value={this.state.url} placeholder={placeholderText} />
                <ReactZeroClipboard text={this.state.url} onAfterCopy={this.onAfterCopy}>
                    <span className="url__copy" onMouseEnter={this.onCopyHover}>
                        <i className="fa fa-clipboard"/>
                    </span>
                </ReactZeroClipboard>
                <span className="url__copy__tooltip">
                    {this.state.notice ? 'copied' : 'copy to clipboard' }
                </span>
            </div>
        );
    }
});


export default ShortenerUrl;