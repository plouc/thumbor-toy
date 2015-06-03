import React          from 'react/addons';
import Reflux         from 'reflux';
import FiltersStore   from './../../stores/FiltersStore';
import ImageStore     from './../../stores/ImageStore';
import FilterSelector from './FilterSelector.jsx';

var Filters = React.createClass({
    displayName: 'Filters',

    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            filters: []
        };
    },

    componentWillMount() {
        this.listenTo(FiltersStore, this.onFiltersChange);
        this.listenTo(ImageStore,   this.onImageChange);
    },

    onImageChange() {
        //console.log('img src', ImageStore.get());
    },

    onFiltersChange() {
        this.setState({
            filters: FiltersStore.current()
        });
    },

    render() {
        var filtersNodes = this.state.filters.map(filter => {
            return React.createElement(filter.component, {
                filter: filter
            });
        });

        return (
            <div className="filters__list">
                <h3 className="panel__title">
                    Filters <i className="fa fa-magic" />
                </h3>
                <div className="panel__content panel__content--filter-selector">
                    <FilterSelector />
                </div>
                {filtersNodes}
            </div>
        );
    }
});

export default Filters;
