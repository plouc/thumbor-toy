/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux        from 'reflux';
import ResizeActions from './../actions/ResizeActions';
import _             from 'lodash';

const defaultResize = {
    active: false,
    width:  500,
    height: 300,
    mode:   'default'
};
var currentResizeConfig = defaultResize;

const ResizeStore = Reflux.createStore({
    init() {
        this.listenTo(ResizeActions.update, this.updateResize);
        this.listenTo(ResizeActions.clear,  this.clearResize);
    },

    updateResize(config) {
        console.log('ResizeStore.updateResize()', config);
        currentResizeConfig = _.merge(currentResizeConfig, config);

        this.trigger(currentResizeConfig);
    },

    clearResize() {
        console.log('ResizeStore.clearResize()');
        currentResizeConfig = defaultResize;

        this.trigger(currentResizeConfig);
    },

    config() {
        return currentResizeConfig;
    }
});

export default ResizeStore;
