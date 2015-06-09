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
