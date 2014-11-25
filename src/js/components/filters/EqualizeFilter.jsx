var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var EqualizeFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return '';
    }
});

module.exports = EqualizeFilter;
