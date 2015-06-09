import Reflux        from 'reflux';
import LoaderActions from './../actions/LoaderActions';

var isLoading = false;
var hasError  = false;

var LoaderStore = Reflux.createStore({
    init() {
        this.listenTo(LoaderActions.loading, this.setLoading);
        this.listenTo(LoaderActions.loaded,  this.setLoaded);
        this.listenTo(LoaderActions.errored, this.setErrored);
    },

    setLoading() {
        isLoading = true;

        this.trigger(isLoading, hasError);
    },

    setLoaded() {
        isLoading = false;
        hasError  = false;

        this.trigger(isLoading, hasError);
    },

    setErrored() {
        hasError  = true;
        isLoading = false;

        this.trigger(isLoading, hasError);
    }
});

export default LoaderStore;
