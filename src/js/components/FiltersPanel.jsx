import React         from 'react';
import Reflux        from 'reflux';
import PanelsStore   from './../stores/PanelsStore';
import PanelsActions from './../actions/PanelsActions';
import ThemeActions  from './../actions/ThemeActions';
import Filters       from './filters/Filters.jsx';

var FiltersPanel = React.createClass({
    displayName: 'FiltersPanel',

    mixins: [
        Reflux.ListenerMixin
    ],

    getInitialState() {
        return {
            opened: PanelsStore.get('filters')
        };
    },

    componentWillMount() {
        this.listenTo(PanelsStore, () => {
            this.setState({
                opened: PanelsStore.get('filters')
            });
        });
    },

    onToggleClick() {
        PanelsActions.toggle('filters');
    },

    onDarkThemeClick(e) {
        e.preventDefault();
        e.stopPropagation();

        ThemeActions.set('dark');
    },

    onLightThemeClick(e) {
        e.preventDefault();
        e.stopPropagation();

        ThemeActions.set('light');
    },

    render() {
        var classes           = 'sidebar sidebar--filters';
        var toggleIconClasses = 'fa fa-';
        if (this.state.opened) {
            classes += ' _is-opened';
            toggleIconClasses += 'times';
        } else {
            toggleIconClasses += 'magic';
        }

        return (
            <div className={classes}>
                <Filters />
                <a className="app-info" href="https://github.com/plouc/thumbor-toy">
                    <i className="fa fa-github" />
                    thumbor-toy
                    &nbsp;<span onClick={this.onDarkThemeClick}>dark</span>
                    &nbsp;<span onClick={this.onLightThemeClick}>light</span>
                </a>
                <span className="sidebar__toggle" onClick={this.onToggleClick}>
                    <i className={toggleIconClasses}/>
                </span>
            </div>
        );
    }
});

export default FiltersPanel;
