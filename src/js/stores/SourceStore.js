/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux        from 'reflux';
import SourceActions from './../actions/SourceActions';
import ConfigStore from './../stores/ConfigStore';
import _                    from 'lodash';

var currentServer = '';
var currentImage  = '';

const SourceStore = Reflux.createStore({
    listenables: SourceActions,

    set(serverUrl, image) {
        var server = _.filter(
            ConfigStore.get('source').servers, server => server.value == serverUrl)[0];
        currentServer = server;
        currentImage  = image;

        this.trigger(currentServer, currentImage);
    },

    setServer(server) {
        currentServer = server;

        this.trigger(currentServer, currentImage);
    },

    setImage(image) {
        currentImage = image;

        this.trigger(currentServer, currentImage);
    },

    isValid() {
        return currentServer !== '' && currentImage !== '';
    },

    server() {
        return currentServer.value;
    },

    fullServer() {
        return currentServer;
    },

    image() {
        return currentImage;
    }
});

export default SourceStore;
