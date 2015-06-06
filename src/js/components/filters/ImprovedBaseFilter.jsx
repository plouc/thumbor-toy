import React, { Component, PropTypes } from 'react';
import FilterActions                   from './../../actions/FilterActions';
import FilterToggle                    from './FilterToggle.jsx';
import mdRenderer                      from './../../lib/markdownRenderer';
import marked                          from 'marked';
import _                               from 'lodash';

import TextInput from './../form/TextInput.jsx';


class ImprovedBaseFilter extends Component {
    onToggleSettings() {
        FilterActions.update(this.props.filter.uid, _.merge(this.props.filter, {
            expanded: !this.props.filter.expanded
        }));
    }

    getSettingsNodes() {
        return this.props.filter.settingsConfig.map(setting => {
            if (setting.type === 'text') {
                return (
                    <div key={setting.key} className="control-group">
                        <label className="control-group__label">{setting.label}</label>
                        <input className="control-group__control"
                            ref={setting.key} type="text"
                            onChange={this.onChange.bind(this)}
                            defaultValue={this.props.filter.settings[setting.key]} />
                    </div>
                );
            } else if (setting.type === 'toggle') {
                return (
                    <div key={setting.key} className="control-group">
                        <label>
                            <input ref={setting.key} type="checkbox"
                                onChange={this.onChange.bind(this)}
                                defaultChecked={this.props.filter.settings[setting.key]} />
                            {setting.label}
                        </label>
                    </div>
                );
            }
        });
    }

    getSettings() {
        var settings = {};
        this.props.filter.settingsConfig.forEach(setting => {
            var value;
            var settingNode = this.refs[setting.key].getDOMNode();

            if (setting.type === 'text') {
                value = settingNode.value;
            } else if (setting.type === 'toggle') {
                value = settingNode.checked;
            }

            settings[setting.key] = value;
        });

        return settings;
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

ImprovedBaseFilter.propTypes = {
    showDescription: PropTypes.bool.isRequired,
    filter:          PropTypes.shape({
        type:        PropTypes.string.isRequired,
        label:       PropTypes.string.isRequired,
        active:      PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
        stringify:   PropTypes.func.isRequired,
        settings:    PropTypes.object.isRequired
    }).isRequired
};

export default ImprovedBaseFilter;
