import React, { Component, PropTypes } from 'react';
import FilterActions                   from './../../actions/FilterActions';
import FilterToggle                    from './FilterToggle.jsx';
import mdRenderer                      from './../../lib/markdownRenderer';
import marked                          from 'marked';
import _                               from 'lodash';


class BaseFilter extends Component {
    onToggleSettings() {
        FilterActions.update(this.props.filter.uid, _.merge(this.props.filter, {
            expanded: !this.props.filter.expanded
        }));
    }

    getSettingsNodes() {
        return '';
    }

    onChange() {
        FilterActions.update(this.props.filter.uid, this.getSettings());
    }

    getClassName() {
        return `filter${ this.props.filter.active ? ' _is-active' : '' }`;
    }

    getBodyClassName() {
        return `filter__body${ this.props.filter.expanded ? ' _is-expanded' : ''}`;
    }

    render() {
        var settings = this.getSettingsNodes();
        if (settings === '') {
            settings = <div className="filter__settings__empty">This filter has no settings</div>;
        }

        var description = null;
        if (this.props.showDescription) {
            description = (
                <div className="filter__description"
                    dangerouslySetInnerHTML={{ __html: marked(this.props.filter.description, { renderer: mdRenderer }) }}/>
            );
        }

        return (
            <div className={this.getClassName()}>
                <FilterToggle {...this.props} onToggle={this.onToggleSettings.bind(this)} />
                <div className={this.getBodyClassName()}>
                    {description}
                    <div className="filter__settings">
                        {settings}
                    </div>
                </div>
            </div>
        );
    }
}

BaseFilter.propTypes = {
    showDescription: PropTypes.bool.isRequired,
    filter:          PropTypes.shape({
        type:        PropTypes.string.isRequired,
        label:       PropTypes.string.isRequired,
        active:      PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
        stringify:   PropTypes.func.isRequired
    }).isRequired
};

export default BaseFilter;
