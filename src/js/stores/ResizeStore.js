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

var defaultResize = {
    active: false,
    width:  500,
    height: 300,
    mode:   'default'
};
var currentResizeConfig = defaultResize;

var ResizeStore = Reflux.createStore({
    init() {
        this.listenTo(ResizeActions.update, this.updateResize);
        this.listenTo(ResizeActions.clear,  this.clearResize);
    },

    updateResize(config) {
        currentResizeConfig = _.merge(currentResizeConfig, config);

        this.trigger();
    },

    clearResize() {
        currentResizeConfig = defaultResize;

        this.trigger();
    },


    config() {
        return currentResizeConfig;
    }
});

export default ResizeStore;
