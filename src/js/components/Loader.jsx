/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
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

    onLoaderChange(isLoading, hasError) {
        this.setState({
            loading: isLoading
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
