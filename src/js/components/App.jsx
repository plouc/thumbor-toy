/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React                 from 'react';
import { ListenerMixin }     from 'reflux';
import Image                 from './Image.jsx';
import Header                from './Header.jsx';
import Loader                from './Loader.jsx';
import SettingsPanel         from './SettingsPanel.jsx';
import Modal                 from './Modal.jsx';
import FiltersPanel          from './FiltersPanel.jsx';
import ConfigStore           from './../stores/ConfigStore';
import UserPreferencesStore  from './../stores/UserPreferencesStore';
import UserPreferencesTypes  from './../stores/UserPreferencesTypes';


const App = React.createClass({
    mixins: [ListenerMixin],

    getInitialState() {
        return {
            theme: UserPreferencesStore.get(UserPreferencesTypes.THEME)
        };
    },

    componentWillMount() {
        this.listenTo(UserPreferencesStore, this.onPreferencesUpdate);
    },

    componentDidMount() {
        ConfigStore.update();
    },

    onPreferencesUpdate() {
        this.setState({
            theme: UserPreferencesStore.get(UserPreferencesTypes.THEME)
        });
    },

    render() {
        return (
            <div className={`main theme-${ this.state.theme }`}>
                <Header />
                <SettingsPanel/>
                <FiltersPanel/>
                <div className="content">
                    <Loader />
                    <Image />
                </div>
                <Modal/>
            </div>
        );
    }
});


export default App;
