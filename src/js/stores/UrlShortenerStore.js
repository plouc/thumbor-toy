/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux     from 'reflux';
import _          from 'lodash';
import UrlStore   from './UrlStore';
import UrlActions from './../actions/UrlActions';
import request    from 'superagent-bluebird-promise';


var currentUrl          = '';
var currentShortenedUrl = '';
var loading             = false;


const UrlShortenerStore = Reflux.createStore({
    init() {
        this.listenTo(UrlStore,           this.update);
        this.listenTo(UrlActions.shorten, this.shorten);
    },

    shorten() {
        currentUrl = UrlStore.get();
        if (currentUrl !== '') {
            currentShortenedUrl = '';
            loading             = true;

            this.trigger();

            request.get('/')
                .then(res => {
                    // @todo set url
                    currentShortenedUrl = 'loaded shortened url';
                    loading             = false;

                    setTimeout(() => {
                        this.trigger();
                    }, 1000);
                })
                .catch(err => {
                    throw err;
                })
            ;
        }
    },

    update() {
        let newUrl = UrlStore.get();
        if (newUrl !== currentUrl) {
            currentShortenedUrl = '';
            currentUrl          = newUrl;

            this.trigger();
        }
    },

    get() {
        return currentShortenedUrl;
    },

    isLoading() {
        return loading;
    }
});

export default UrlShortenerStore;
