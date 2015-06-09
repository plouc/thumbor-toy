import React                  from 'react';
import Reflux                 from 'reflux';
import FiltersStore           from './../../stores/FiltersStore';
import ImageStore             from './../../stores/ImageStore';
import UserPreferencesStore   from './../../stores/UserPreferencesStore';
import UserPreferencesActions from './../../actions/UserPreferencesActions';
import FilterSelector         from './FilterSelector.jsx';
import FiltersContainer       from './FiltersContainer.jsx';

var Filters = React.createClass({
    displayName: 'Filters',

    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            filters:                [],
            showFiltersDescription: UserPreferencesStore.get('showFiltersDescription')
        };
    },

    componentWillMount() {
        this.listenTo(FiltersStore,         this.onFiltersChange);
        this.listenTo(ImageStore,           this.onImageChange);
        this.listenTo(UserPreferencesStore, this.onUserPreferencesChange);
    },

    onImageChange() {
        //console.log('img src', ImageStore.get());
    },

    onFiltersChange() {
        this.setState({
            filters: FiltersStore.current()
        });
    },

    onUserPreferencesChange(preferences) {
        this.setState({
            showFiltersDescription: preferences.showFiltersDescription
        });
    },

    onShowDescriptionToggle() {
        UserPreferencesActions.set('showFiltersDescription', !this.state.showFiltersDescription);
    },

    render() {
        var descriptionNode;
        if (this.state.showFiltersDescription) {
            descriptionNode = (
                <div className="filters__description-control filters__description-control--active" onClick={this.onShowDescriptionToggle}>
                    <i className="fa fa-info-circle"/>
                    hide filters description
                </div>
            );
        } else {
            descriptionNode = (
                <div className="filters__description-control" onClick={this.onShowDescriptionToggle}>
                    <i className="fa fa-info-circle"/>
                    show filters description
                </div>
            );
        }

        return (
            <div className="filters__list">
                <h3 className="panel__title">
                    Filters <i className="fa fa-magic" />
                </h3>
                <div className="panel__content panel__content--filter-selector">
                    <FilterSelector />
                </div>
                {descriptionNode}
                <FiltersContainer showFiltersDescription={this.state.showFiltersDescription} filters={this.state.filters}/>
            </div>
        );
    }
});

export default Filters;
