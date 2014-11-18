var React         = require('react/addons');
var Reflux        = require('reflux');
var MetadataStore = require('./../stores/MetadataStore');

var Metadata = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            metadata: null
        };
    },

    componentWillMount: function () {
        this.listenTo(MetadataStore, this._onMetadataChange);
    },

    render: function () {
        return (
            <p>Metadata</p>
        );
    },

    _onMetadataChange: function (metadata) {
    }
});

module.exports = Metadata;
