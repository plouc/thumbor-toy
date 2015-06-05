import React         from 'react';
import marked        from 'marked';
import FilterActions from './../../actions/FilterActions';
import FilterToggle  from './FilterToggle.jsx';
import _             from 'lodash';

var FilterMixin = {
    propTypes: {
        showDescription: React.PropTypes.bool.isRequired,
        filter:          React.PropTypes.shape({
            type:        React.PropTypes.string.isRequired,
            label:       React.PropTypes.string.isRequired,
            active:      React.PropTypes.bool.isRequired,
            description: React.PropTypes.string.isRequired,
            stringify:   React.PropTypes.func.isRequired
        }).isRequired
    },

    componentWillMount() {
        this.markdown = new marked.Renderer();
        this.markdown.link = function (href, title, text) {
            if (this.options.sanitize) {
                try {
                    var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
                } catch (e) {
                    return '';
                }
                if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
                    return '';
                }
            }

            return `<a target="_blank" href="${ href }"${ title ? ` title="${ title }"` : '' }>
                ${ text }
                <i class="fa fa-external-link"></i>
            </a>`;
        };
    },

    onToggleSettings() {
        FilterActions.update(this.props.filter.uid, _.merge(this.props.filter, {
            expanded: !this.props.filter.expanded
        }));
    },

    onChange() {
        FilterActions.update(this.props.filter.uid, this.getSettings());
    },

    getClassName() {
        return `filter${ this.props.filter.active ? ' _is-active' : '' }`;
    },

    getBodyClassName() {
        return `filter__body${ this.props.filter.expanded ? ' _is-expanded' : ''}`;
    },

    render() {
        var settings = this.getSettingsNodes();
        if (settings === '') {
            settings = <div className="filter__settings__empty">This filter has no settings</div>;
        }

        var description = null;
        if (this.props.showDescription) {
            description = (
                <div className="filter__description"
                    dangerouslySetInnerHTML={{ __html: marked(this.props.filter.description, { renderer: this.markdown }) }}/>
            );
        }

        return (
            <div className={this.getClassName()}>
                <FilterToggle {...this.props}
                    onToggle={this.onToggleSettings} />
                <div className={this.getBodyClassName()}>
                    {description}
                    <div className="filter__settings">
                        {settings}
                    </div>
                </div>
            </div>
        );
    }
};

export default FilterMixin;
