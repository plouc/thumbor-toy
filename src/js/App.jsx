var React          = require('react/addons');
var Metadata       = require('./components/Metadata.jsx');
var ServerSelector = require('./components/ServerSelector.jsx');
var ImageSource    = require('./components/ImageSource.jsx');
var Image          = require('./components/Image.jsx');
var Url            = require('./components/Url.jsx');
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

React.render((
    <div>
        <div className="url">
            <Url />
        </div>
        <div className="filters">
            {serverSelector}
            <ImageSource />
            <Filters />
        </div>
        <div className="metadata">
            <Resize />
        </div>
        <div className="content">
            <Image />
        </div>
    </div>
), document.body);