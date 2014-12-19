var React          = require('react/addons');
var ServerSelector = require('./components/ServerSelector.jsx');
var PresetSelector = require('./components/PresetSelector.jsx');
var ImageSource    = require('./components/ImageSource.jsx');
var Image          = require('./components/Image.jsx');
var Url            = require('./components/Url.jsx');
var Loader         = require('./components/Loader.jsx');
var Filters        = require('./components/filters/Filters.jsx');
var Resize         = require('./components/Resize.jsx');
var ServerActions  = require('./actions/ServerActions');
var _              = require('lodash');
var config         = require('./../../config');

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
            <Resize />
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
