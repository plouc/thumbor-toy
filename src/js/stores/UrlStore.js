/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux                 from 'reflux';
import _                      from 'lodash';
import CryptoJS               from 'crypto-js';
import base64                 from 'base-64';
import ConfigStore            from './../stores/ConfigStore';
import SourceStore            from './SourceStore';
import FiltersStore           from './FiltersStore';
import ResizeStore            from './ResizeStore';

var currentUrl = '';

var UrlStore = Reflux.createStore({
    init() {
        this.listenTo(SourceStore,  this.update);
        this.listenTo(FiltersStore, this.update);
        this.listenTo(ResizeStore,  this.update);
    },

    signature(resize, filters, image_uri) {
        var SECRET_KEY = ConfigStore.get('SECRET_KEY')
        if (SECRET_KEY) {
            var message = '';
            if (resize) {
                message += resize;
            }

            if (filters) {
                message += filters;
            }

            if (image_uri) {
                message += image_uri;
            }

            var encrypted_hash = CryptoJS.HmacSHA1(message, SECRET_KEY)
            return CryptoJS.enc.Base64.stringify(encrypted_hash).replace('/', '_') + '/';
        } else {
            return 'unsafe/';
        }
    },

    update() {
        var currentFilters = _.filter(FiltersStore.current(), { 'active': true });
        var filters        = '';
        if (currentFilters.length) {
            filters = 'filters:' + _.map(currentFilters, filter => {
                var settings = '';
                if (filter.template) {
                    var compiled = _.template(filter.template);
                    settings = compiled(filter.settings);
                }

                return `${ filter.type }(${ settings })`;
            }).join(':') + '/';
        }

        var resizeConfig = ResizeStore.config();
        var resize       = '';
        if (resizeConfig.active) {
            if (resizeConfig.debug === true && resizeConfig.mode === 'smart') {
                resize += 'debug/';
            }

            if (resizeConfig.mode === 'fit') {
                resize += 'fit-in/';
            }

            resize += resizeConfig.width + 'x' + resizeConfig.height + '/';

            if (resizeConfig.mode === 'smart') {
                resize += 'smart/';
            }
        }

        var signature = this.signature(resize, filters, SourceStore.image());
        console.log('signature: '+ signature)
        console.log('resize: '+ resize)
        console.log('filters: '+ filters)
        console.log('image: '+ SourceStore.image())
        currentUrl = SourceStore.server() + signature + resize + filters + SourceStore.image();

        this.trigger(currentUrl);
    },

    get() {
        return currentUrl;
    }
});

export default UrlStore;
