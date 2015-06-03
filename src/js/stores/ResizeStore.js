import Reflux        from 'reflux';
import ResizeActions from './../actions/ResizeActions';
import _             from 'lodash';

var _resizeConfig = {
    active: false,
    width:  300,
    height: 300,
    smart:  true,
    debug:  false,
    fit:    false
};

var ResizeStore = Reflux.createStore({
    init() {
        this.listenTo(ResizeActions.update,    this.updateResize);
        this.listenTo(ResizeActions.clear,     this.clearResize);
        this.listenTo(ResizeActions.setPreset, this.presetResize);
    },

    updateResize(config) {
        _resizeConfig = _.merge(_resizeConfig, config);

        this.trigger();
    },

    clearResize() {
        _resizeConfig = {
            active: false,
            width:  300,
            height: 300,
            smart:  true,
            debug:  false,
            fit:    false
        };

        this.trigger();
    },

    presetResize(preset) {
        _resizeConfig = _.merge(_resizeConfig, {
            width:  preset.width,
            height: preset.height
        });

        this.trigger();
    },

    config() {
        return _resizeConfig;
    }
});

export default ResizeStore;
