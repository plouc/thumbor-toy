import React                  from 'react';
import Image                  from './components/Image.jsx';
import Url                    from './components/Url.jsx';
import Loader                 from './components/Loader.jsx';
import ServerActions          from './actions/ServerActions';
import UserPreferencesActions from './actions/UserPreferencesActions';
import SettingsPanel          from './components/SettingsPanel.jsx';
import FiltersPanel           from './components/FiltersPanel.jsx';
import config                 from './../../config';

React.render((
    <div>
        <div className="url">
            <Url />
        </div>
        <SettingsPanel config={config}/>
        <FiltersPanel/>
        <div className="content">
            <Loader />
            <Image />
        </div>
    </div>
), document.body);
