var React       = require('react/addons');
var Metadata    = require('./components/Metadata.jsx');
var ImageSource = require('./components/ImageSource.jsx');
var Image       = require('./components/Image.jsx');
var Url         = require('./components/Url.jsx');
var Filters     = require('./components/Filters.jsx');
var Resize      = require('./components/Resize.jsx');

React.render((
    <div>
        <div className="url">
            <Url />
        </div>
        <div className="filters">
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