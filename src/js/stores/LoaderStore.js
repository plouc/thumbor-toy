import Reflux        from 'reflux';
import LoaderActions from './../actions/LoaderActions';

var _loading = false;

var ImageStore = Reflux.createStore({
    init() {
        this.listenTo(LoaderActions.loading, this.setLoading);
        this.listenTo(LoaderActions.loaded,  this.setLoaded);
    },

    setLoading() {
        _loading = true;

        this.trigger(_loading);
    },

    setLoaded() {
        _loading = false;

        this.trigger(_loading);
    }
});

export default ImageStore;
