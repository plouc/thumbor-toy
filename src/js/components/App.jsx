import React         from 'react';
import Reflux        from 'reflux';
import Image         from './Image.jsx';
import Header        from './Header.jsx';
import Loader        from './Loader.jsx';
import SettingsPanel from './SettingsPanel.jsx';
import FiltersPanel  from './FiltersPanel.jsx';
import ThemeStore    from './../stores/ThemeStore.js';
import config        from './../../../config';

var App = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            theme: ThemeStore.get()
        };
    },

    componentWillMount() {
        this.listenTo(ThemeStore, this.onThemeUpdate);
    },

    onThemeUpdate(theme) {
        this.setState({
            theme: theme
        });
    },

    render() {
        return (
            <div className={`main theme-${ this.state.theme }`}>
                <Header />
                <SettingsPanel config={config}/>
                <FiltersPanel/>
                <div className="content">
                    <Loader />
                    <Image />
                </div>
            </div>
        );
    }
});

export default App;