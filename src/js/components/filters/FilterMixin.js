import React         from 'react/addons';
import marked        from 'marked';
import FilterActions from './../../actions/FilterActions';
import FilterToggle  from './FilterToggle.jsx';

var FilterMixin = {
    propTypes: {
        filter: React.PropTypes.shape({
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

    getInitialState() {
        return {
            expanded: true
        };
    },

    onToggleSettings() {
        this.setState({
            expanded: !this.state.expanded
        });
    },

    onChange() {
        FilterActions.update(this.props.filter.id, this.getSettings());
    },

    getClassName() {
        return `filter${ this.props.filter.active ? ' _is-active' : '' }`;
    },

    getBodyClassName() {
        return `filter__body${ this.state.expanded ? ' _is-expanded' : ''}`;
    },

    render() {
        var settings = this.getSettingsNodes();

        return (
            <div className={this.getClassName()}>
                <FilterToggle {...this.props}
                    onToggle={this.onToggleSettings}
                    expandable={!!settings}
                    expanded={this.state.expanded} />
                <div className={this.getBodyClassName()}>
                    <div className="filter__description"
                        dangerouslySetInnerHTML={{ __html: marked(this.props.filter.description, { renderer: this.markdown }) }}/>
                    <div className="filter__settings">
                        {settings}
                    </div>
                </div>
            </div>
        );
    }
};

export default FilterMixin;
