import Reflux       from 'reflux';
import _            from 'lodash';
import ImageStore   from './ImageStore';
import FiltersStore from './FiltersStore';
import ResizeStore  from './ResizeStore';
import ServerStore  from './ServerStore';

var UrlStore = Reflux.createStore({
    init() {
        this.listenTo(ImageStore,   this.update);
        this.listenTo(FiltersStore, this.update);
        this.listenTo(ResizeStore,  this.update);
        this.listenTo(ServerStore,  this.update);
    },

    update() {
        var currentFilters = _.filter(FiltersStore.current(), { 'active': true });
        var filters        = '';
        if (currentFilters.length) {
            filters = 'filters:' + _.map(currentFilters, function (filter) {
                return filter.stringify();
            }).join(':') + '/';
        }

        var resizeConfig = ResizeStore.config();
        var resize       = '';
        if (resizeConfig.active) {
            if (resizeConfig.debug) {
                resize += 'debug/';
            }

            if (resizeConfig.fit) {
                resize += 'fit-in/';
            }

            resize += resizeConfig.width + 'x' + resizeConfig.height + '/';

            if (resizeConfig.smart) {
                resize += 'smart/';
            }
        }

        var url = ServerStore.current() + 'unsafe/' + resize + filters + ImageStore.get();

        this.trigger(url);
    }
});

export default UrlStore;
