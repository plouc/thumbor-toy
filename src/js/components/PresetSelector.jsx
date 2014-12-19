var React         = require('react/addons');
var Reflux        = require('reflux');
var config        = require('./../../../config');
var ImageActions  = require('./../actions/ImageActions');
var ServerActions = require('./../actions/ServerActions');
var ResizeActions = require('./../actions/ResizeActions');
var FilterActions = require('./../actions/FilterActions');
var _             = require('lodash');

var PresetSelector = React.createClass({
    mixins: [Reflux.ListenerMixin],

    render: function () {
        this.props.images = [{
            label: '--- select a pre-filtered image ---',
            data:  {
                server:  null,
                image:   null,
                resize:  {},
                filters: []
            }
        }].concat(config.presetImages);

        var options = this.props.images.map(function (image, i) {
            return <option key={i} value={i}>{image.label}</option>
        });

        return <div className="panel panel--img-src">
            <h3 className="panel__title">
                <i className="fa fa-image" />
                Pre-filtered images
            </h3>
            <div className="panel__content">
                <div className="select-box">
                    <select className="control--full-width"
                            onChange={this._onChange}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
            </div>
        </div>;
    },

    _onChange: function (e) {
        var imageData = this.props.images[e.target.value].data;

        if (null === imageData.image || null === imageData.server) {
            return;
        }

        ServerActions.set(imageData.server);
        ImageActions.set(imageData.image);
        ResizeActions.clear();
        ResizeActions.update(imageData.resize);
        FilterActions.clear();
        _.forEach(imageData.filters, function (filter, index) {
            FilterActions.add(filter.type);
            FilterActions.update(index, filter.settings);
        });
    }
});

module.exports = PresetSelector;
