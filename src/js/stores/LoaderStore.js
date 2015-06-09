import Reflux        from 'reflux';
import LoaderActions from './../actions/LoaderActions';

var currentLoading = false;

var ImageStore = Reflux.createStore({
    init() {
        this.listenTo(LoaderActions.loading, this.setLoading);
        this.listenTo(LoaderActions.loaded,  this.setLoaded);
    },

    setLoading() {
        currentLoading = true;

        this.trigger(currentLoading);
    },

    setLoaded() {
        currentLoading = false;

        this.trigger(currentLoading);
    }
});

export default ImageStore;
