import React       from 'react';
import FilterMixin from './FilterMixin';

var EqualizeFilter = React.createClass({
    displayName: 'EqualizeFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return '';
    }
});

export default EqualizeFilter;
