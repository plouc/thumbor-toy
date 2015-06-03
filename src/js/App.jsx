import React          from 'react/addons';
import ServerSelector from './components/ServerSelector.jsx';
import PresetSelector from './components/PresetSelector.jsx';
import ImageSource    from './components/ImageSource.jsx';
import Image          from './components/Image.jsx';
import Url            from './components/Url.jsx';
import Loader         from './components/Loader.jsx';
import Filters        from './components/filters/Filters.jsx';
import Resize         from './components/Resize.jsx';
import ServerActions  from './actions/ServerActions';
import _              from 'lodash';
import config         from './../../config';

var serverSelector = null;
if (_.isArray(config.server)) {
    serverSelector = <ServerSelector />;
} else {
    ServerActions.set(config.server);
}

var presetSelector = null;
if (_.isArray(config.presetImages) && config.presetImages.length > 0) {
    presetSelector = <PresetSelector />;
}

React.render((
    <div>
        <div className="url">
            <Url />
        </div>
        <div className="sidebar sidebar--settings">
            {presetSelector}
            {serverSelector}
            <ImageSource />
            <Resize presets={config.presetsResize || []} />
        </div>
        <div className="sidebar sidebar--filters">
            <Filters />
            <a className="app-info" href="https://github.com/plouc/thumbor-toy">
                <i className="fa fa-github" />
                thumbor-toy
            </a>
        </div>
        <div className="content">
            <Loader />
            <Image />
        </div>
    </div>
), document.body);
