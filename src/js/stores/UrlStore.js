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
import SourceStore  from './SourceStore';
import FiltersStore from './FiltersStore';
import ResizeStore  from './ResizeStore';


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

        var url = SourceStore.server() + 'unsafe/' + resize + filters + SourceStore.image();

        this.trigger(url);
    }
});

export default UrlStore;
