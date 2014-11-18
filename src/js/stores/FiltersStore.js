var Reflux        = require('reflux');
var FilterActions = require('./../actions/FilterActions');
var config        = require('./../../../config');
var _             = require('lodash');

var _currentFilters   = [];
var _availableFilters = [
    {
        type:      'blur',
        label:     'Blur',
        active:    false,
        radius:    1,
        stringify: function () {
            return this.type + '(' + this.radius + ')';
        }
    },
    // Usage: brightness(amount)
    {
        type:      'brightness',
        label:     'Brightness',
        active:    false,
        amount:    0,
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }
    },
    // Usage: noise(amount)
    {
        type:      'noise',
        label:     'Noise',
        active:    false,
        amount:    0,
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }

    },
    {
        type:      'grayscale',
        label:     'Grayscale',
        active:    false,
        stringify: function () {
            return this.type + '()';
        }
    },
    {
        type:         'watermark',
        label:        'Watermark',
        active:       false,
        image:        config.watermarkImages[0].src,
        x:            10,
        y:            10,
        transparency: 0,
        stringify:    function () {
            return this.type + '(' + this.image + ',' + this.x + ',' + this.y + ',' + this.transparency +')';
        }
    }
];

var FiltersStore = Reflux.createStore({
    init: function () {
        this.listenTo(FilterActions.update, this.updateFilter);
        this.listenTo(FilterActions.add,    this.addFilter);
        this.listenTo(FilterActions.delete, this.deleteFilter);
    },

    addFilter: function (type) {
        var filter = _.find(_availableFilters, { 'type': type });

        var filterInstance = _.clone(filter);
        filterInstance.active = true;

        _currentFilters.push(filterInstance);

        _.forEach(_currentFilters, function (filter, i) {
            filter.id = i;
        });

        this.trigger();
    },

    deleteFilter: function (id) {
        _.remove(_currentFilters, { id: id });
        _.forEach(_currentFilters, function (filter, i) {
            filter.id = i;
        });

        this.trigger();
    },

    updateFilter: function (id, settings) {
        _.merge(_currentFilters[id], settings);

        this.trigger();
    },

    current: function () {
        return _currentFilters;
    },

    available: function () {
        return _availableFilters;
    }
});

module.exports = FiltersStore;