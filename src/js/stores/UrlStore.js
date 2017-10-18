/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux       from 'reflux';
import _            from 'lodash';
import jsSHA        from 'jssha';
import SourceStore  from './SourceStore';
import FiltersStore from './FiltersStore';
import ResizeStore  from './ResizeStore';

var currentUrl = '';

var UrlStore = Reflux.createStore({
    init() {
        this.listenTo(SourceStore,  this.update);
        this.listenTo(FiltersStore, this.update);
        this.listenTo(ResizeStore,  this.update);
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

        var server = SourceStore.fullServer();
        var serverUrl = '';
        var serverKey = '';
        if (typeof server == 'object') {
            serverUrl = server.value;
            serverKey = server.key;
        } else {
            serverUrl = server;
            serverKey = '';
        }

        var instructions = resize + filters + encodeURIComponent(SourceStore.image())

        currentUrl = serverUrl;
        if (!serverKey) {
            currentUrl += 'unsafe/' + instructions;
        }
        else {
            currentUrl += sign(instructions, serverKey);
            currentUrl += '/' + instructions;
        };

        this.trigger(currentUrl);
    },

    get() {
        return currentUrl;
    }
});

export default UrlStore;



// From https://github.com/bein-sports/thumbor-js-client/blob/e3506846cd5f6fdc005746ec95cbacfd98969860/src/thumbor-js-client.js#L63
function sign(urlPart, secret) {

    //urlPart = urlPart.replace(':', '%3A')
    var hmacObj = new jsSHA(urlPart, "TEXT");
    //Generates hMac key
    var hash = hmacObj.getHMAC(
        secret,
        "TEXT",
        "SHA-1",
        "B64"
    );

    // Replaces / by _ and + by - , to avoid url issues
    return hash.replace(/\//g, "_").replace(/\+/g, "-");

};

window.sign = sign;