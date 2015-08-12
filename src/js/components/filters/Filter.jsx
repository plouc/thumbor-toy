/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component, PropTypes } from 'react';
import FilterActions                   from './../../actions/FilterActions';
import FilterToggle                    from './FilterToggle.jsx';
import mdRenderer                      from './../../lib/markdownRenderer';
import marked                          from 'marked';
import _                               from 'lodash';
import TextControl                     from './../form/TextControl.jsx';
import ToggleControl                   from './../form/ToggleControl.jsx';
import ChoiceControl                   from './../form/ChoiceControl.jsx';


class Filter extends Component {
    onToggleSettings() {
        let { filter } = this.props;

        FilterActions.update(filter.uid, _.merge(filter, {
            expanded: !filter.expanded
        }));
    }

    getSettingsNodes() {
        let { filter } = this.props;

        return filter.settingsConfig.map(setting => {
            if (setting.type === 'text') {
                return (
                    <TextControl key={setting.key}
                        propKey={setting.key} label={setting.label}
                        onChange={this.onChange.bind(this)}
                        value={filter.settings[setting.key]}
                    />
                );
            } else if (setting.type === 'toggle') {
                return (
                    <ToggleControl key={setting.key}
                        propKey={setting.key} label={setting.label}
                        onChange={this.onChange.bind(this)}
                        value={filter.settings[setting.key]}
                    />
                );
            } else if (setting.type === 'choice') {
                return (
                    <ChoiceControl key={setting.key}
                        propKey={setting.key} label={setting.label}
                        onChange={this.onChange.bind(this)}
                        value={filter.settings[setting.key]}
                        choices={setting.choices}
                    />
                );
            }
            // @todo throw for invalid type
        });
    }

    onChange(settingKey, settingValue) {
        let { filter } = this.props;

        FilterActions.update(filter.uid, _.merge(filter.settings, {
            [settingKey]: settingValue
        }));
    }

    getClassName() {
        let { filter } = this.props;

        return `filter${ filter.active ? ' _is-active' : '' }`;
    }

    getBodyClassName() {
        let { filter } = this.props;

        return `filter__body${ filter.expanded ? ' _is-expanded' : ''}`;
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
                    dangerouslySetInnerHTML={{
                        __html: marked(this.props.filter.description, { renderer: mdRenderer })
                    }}
                />
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

Filter.propTypes = {
    showDescription: PropTypes.bool.isRequired,
    filter:          PropTypes.shape({
        type:        PropTypes.string.isRequired,
        label:       PropTypes.string.isRequired,
        active:      PropTypes.bool.isRequired,
        expanded:    PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
        template:    PropTypes.string,
        settings:    PropTypes.object.isRequired
    }).isRequired
};

export default Filter;
