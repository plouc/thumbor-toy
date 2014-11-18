var Reflux        = require('reflux');
var FilterActions = require('./../actions/FilterActions');
var _             = require('lodash');

var _filters = {
    // Usage: blur(radius [, sigma])
    blur: {
        id:        'blur',
        active:    false,
        radius:    0,
        stringify: function () {
            return this.id + '(' + this.radius + ')';
        }
    },

    // Usage: brightness(amount)
    brightness: {
        id:        'brightness',
        active:    false,
        amount:    0,
        stringify: function () {
            return this.id + '(' + this.amount + ')';
        }
    },

    // Usage: noise(amount)
    noise: {
        id:        'noise',
        active:    false,
        amount:    0,
        stringify: function () {
            return this.id + '(' + this.amount + ')';
        }

    },

    grayscale: {
        id:        'grayscale',
        active:    false,
        stringify: function () {
            return this.id + '()';
        }
    }
};

var FiltersStore = Reflux.createStore({
    init: function () {
        this.listenTo(FilterActions.update, this.updateFilter);
    },

    updateFilter: function (id, filter) {
        _.merge(_filters[id], filter);

        this.trigger();
    },

    get: function (id) {
        return _filters[id];
    },

    all: function () {
        return _filters;
    },

    actives: function () {
        var actives = [];
        _.forOwn(_filters, function (filter, id) {
            if (filter.active === true) {
                actives.push(filter);
            }
        });

        return actives;
    }
});

module.exports = FiltersStore;