var React       = require('react/addons');
var FilterMixin = require('./FilterMixin');

var GrayscaleFilter = React.createClass({
    mixins: [FilterMixin],

    getSettingsNodes: function () {
        return '';
    }
});

module.exports = GrayscaleFilter;
