import React       from 'react';
import FilterMixin from './FilterMixin';

var StripIccFilter = React.createClass({
    displayName: 'StripIccFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return '';
    }
});

export default StripIccFilter;
