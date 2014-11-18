var Reflux   = require('reflux');
var config   = require('./../../../config');
var $        = require('jquery');
var UrlStore = require('./UrlStore');

var MetadataStore = Reflux.createStore({
    init: function () {
        this.listenTo(UrlStore, this.getMetadata);
    },

    getMetadata: function (url) {
        return;
        $.ajax({
            url: url
        })
            .then(function (metadata) {
                this.trigger(metadata);
            }.bind(this))
        ;
    }
});

module.exports = MetadataStore;