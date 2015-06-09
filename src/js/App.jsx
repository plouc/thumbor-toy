import React         from 'react';
import Image         from './components/Image.jsx';
import Header        from './components/Header.jsx';
import Loader        from './components/Loader.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';
import FiltersPanel  from './components/FiltersPanel.jsx';
import config        from './../../config';

React.render((
    <div>
        <Header />
        <SettingsPanel config={config}/>
        <FiltersPanel/>
        <div className="content">
            <Loader />
            <Image />
        </div>
    </div>
), document.body);
