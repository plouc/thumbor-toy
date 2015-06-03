import Reflux        from 'reflux';
import ServerActions from './../actions/ServerActions';

var _server = '';

var ServerStore = Reflux.createStore({
    init() {
        this.listenTo(ServerActions.set, this.updateServer);
    },

    updateServer(server) {
        _server = server;

        this.trigger(_server);
    },

    current() {
        return _server;
    }
});

export default ServerStore;
