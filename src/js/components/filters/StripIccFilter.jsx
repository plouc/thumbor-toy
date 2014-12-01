var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var StripIccFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return '';
    }
});

module.exports = StripIccFilter;
