import React       from 'react';
import FilterMixin from './FilterMixin';

var GrayscaleFilter = React.createClass({
    displayName: 'GrayscaleFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        return '';
    }
});

export default GrayscaleFilter;
