var React            = require('react/addons');
var Reflux           = require('reflux');
var config           = require('./../../../config');
var FiltersStore     = require('./../stores/FiltersStore');
var ImageStore       = require('./../stores/ImageStore');
var BrightnessFilter = require('./filters/BrightnessFilter.jsx');
var BlurFilter       = require('./filters/BlurFilter.jsx');
var GrayscaleFilter  = require('./filters/GrayscaleFilter.jsx');
var NoiseFilter      = require('./filters/NoiseFilter.jsx');
var WatermarkFilter  = require('./filters/WatermarkFilter.jsx');

var Filters = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            filters: FiltersStore.all()
        };
    },

    componentWillMount: function () {
        this.listenTo(FiltersStore, this._onFiltersChange);
        this.listenTo(ImageStore,   this._onImageChange);
    },

    render: function () {
        return <div className="filters__list">
            <h3 className="filters__title">Filters</h3>
            <BrightnessFilter filter={this.state.filters.brightness} />
            <BlurFilter filter={this.state.filters.blur} />
            <NoiseFilter filter={this.state.filters.noise} />
            <GrayscaleFilter filter={this.state.filters.grayscale} />
            <WatermarkFilter filter={this.state.filters.watermark} />
        </div>
    },

    _onImageChange: function () {
        console.log('img src', ImageStore.get());
    },

    _onFiltersChange: function () {
        this.setState({
            filters: FiltersStore.all()
        });
    }
});

module.exports = Filters;
