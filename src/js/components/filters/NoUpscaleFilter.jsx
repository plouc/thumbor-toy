import React       from 'react';
import FilterMixin from './FilterMixin';

var NoUpscaleFilter = React.createClass({
    displayName: 'NoUpscaleFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return '';
    }
});

export default NoUpscaleFilter;
