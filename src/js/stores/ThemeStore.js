import Reflux       from 'reflux';
import ThemeActions from './../actions/ThemeActions';

var currentTheme = 'dark';

var ThemeStore = Reflux.createStore({
    init() {
        this.listenTo(ThemeActions.set, this.set);
    },

    set(theme) {
        currentTheme = theme;

        this.trigger(currentTheme);
    },

    get() {
        return currentTheme;
    }
});

export default ThemeStore;
