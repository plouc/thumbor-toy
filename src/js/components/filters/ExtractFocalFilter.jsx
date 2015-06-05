import React       from 'react';
import FilterMixin from './FilterMixin';

var ExtractFocalFilter = React.createClass({
    displayName: 'ExtractFocalFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return '';
    }
});

export default ExtractFocalFilter;
