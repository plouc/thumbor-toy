var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var NoUpscaleFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return '';
    }
});

module.exports = NoUpscaleFilter;
