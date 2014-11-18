var React        = require('react/addons');
var Reflux       = require('reflux');
var config       = require('./../../../config');
var ImageActions = require('./../actions/ImageActions');

var ImageSource = React.createClass({
    mixins: [Reflux.ListenerMixin],

    render: function () {
        var sources = config.images;
        sources.unshift({
            label: 'select an image',
            src:   null
        });

        var options = sources.map(function (image) {
            return <option key={image.src} value={image.src}>{image.label}</option>
        });

        return (
            <select onChange={this._onChange}>
                {options}
            </select>
        );
    },

    _onChange: function (e) {
        ImageActions.set(e.target.value);
    }
});

module.exports = ImageSource;
