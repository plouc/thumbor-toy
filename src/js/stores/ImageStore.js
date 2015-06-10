/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Reflux       from 'reflux';
import ImageActions from './../actions/ImageActions';

var currentImage = '';

var ImageStore = Reflux.createStore({
    init() {
        this.listenTo(ImageActions.set, this.setImage);
    },

    setImage(image) {
        currentImage = image;

        this.trigger();
    },

    get() {
        return currentImage;
    }
});

export default ImageStore;
