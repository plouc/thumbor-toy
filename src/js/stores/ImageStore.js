var Reflux       = require('reflux');
var ImageActions = require('./../actions/ImageActions');
var config       = require('./../../../config');
var $            = require('jquery');

var _image = '';

var ImageStore = Reflux.createStore({
    init: function () {
        this.listenTo(ImageActions.set, this.setImage);
    },

    setImage: function (image) {
        _image = image;

        this.trigger();
    },

    get: function () {
        return _image;
    }
});

module.exports = ImageStore;