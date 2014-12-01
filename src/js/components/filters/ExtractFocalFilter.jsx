var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var ExtractFocalFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return '';
    }
});

module.exports = ExtractFocalFilter;
