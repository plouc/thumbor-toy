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

var currentServer = '';
var currentImage  = '';

var SourceStore = Reflux.createStore({
    listenables: SourceActions,

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
        return currentServer;
    },

    image() {
        return currentImage;
    }
});

export default SourceStore;
