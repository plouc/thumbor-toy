import Reflux       from 'reflux';
import ImageActions from './../actions/ImageActions';

var _image = '';

var ImageStore = Reflux.createStore({
    init() {
        this.listenTo(ImageActions.set, this.setImage);
    },

    setImage(image) {
        _image = image;

        this.trigger();
    },

    get() {
        return _image;
    }
});

export default ImageStore;
