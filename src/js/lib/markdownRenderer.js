import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
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


export default renderer;