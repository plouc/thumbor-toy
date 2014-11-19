var React        = require('react/addons');
var Reflux       = require('reflux');
var config       = require('./../../../config');
var ImageActions = require('./../actions/ImageActions');

var ImageSource = React.createClass({
    mixins: [Reflux.ListenerMixin],

    render: function () {
        var sources = config.images;
        sources.unshift({
            label: '--- select an image ---',
            src:   null
        });

        var options = sources.map(function (image) {
            return <option key={image.src} value={image.src}>{image.label}</option>
        });

        return <div className="panel panel--img-src">
            <h3 className="panel__title">
                <i className="fa fa-picture-o" />
                Image
            </h3>
            <div className="panel__content">
                <select className="select--full" onChange={this._onChange}>
                    {options}
                </select>
            </div>
        </div>;
    },

    _onChange: function (e) {
        ImageActions.set(e.target.value);
    }
});

module.exports = ImageSource;
