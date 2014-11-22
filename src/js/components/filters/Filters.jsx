var React          = require('react/addons');
var Reflux         = require('reflux');
var config         = require('./../../../../config');
var FiltersStore   = require('./../../stores/FiltersStore');
var ImageStore     = require('./../../stores/ImageStore');
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
            return React.createElement(filter.component, {
                filter: filter
            });
        });

        return <div className="filters__list">
            <h3 className="panel__title">
                Filters <i className="fa fa-magic" />
            </h3>
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
