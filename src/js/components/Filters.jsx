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

var FilterSelector = require('./FilterSelector.jsx');

var Filters = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            filters: []
        };
    },

    componentWillMount: function () {
        this.listenTo(FiltersStore, this._onFiltersChange);
        this.listenTo(ImageStore,   this._onImageChange);
    },

    render: function () {

        var filtersNodes = this.state.filters.map(function (filter, i) {
            switch (filter.type) {
                case 'brightness':
                    return <BrightnessFilter filter={filter} />
                    break;

                case 'blur':
                    return <BlurFilter filter={filter} />
                    break;

                case 'grayscale':
                    return <GrayscaleFilter filter={filter} />
                    break;

                case 'watermark':
                    return <WatermarkFilter filter={filter} />
                    break;

                case 'noise':
                    return <NoiseFilter filter={filter} />
                    break;
            }
        });

        return <div className="filters__list">
            <h3 className="filters__title">Filters</h3>
            <FilterSelector />
            {filtersNodes}
        </div>
    },

    _onImageChange: function () {
        //console.log('img src', ImageStore.get());
    },

    _onFiltersChange: function () {
        this.setState({
            filters: FiltersStore.current()
        });
    }
});

module.exports = Filters;
