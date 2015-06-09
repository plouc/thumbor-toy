import Reflux        from 'reflux';
import ServerActions from './../actions/ServerActions';

var currentServer = '';

var ServerStore = Reflux.createStore({
    init() {
        this.listenTo(ServerActions.set, this.updateServer);
    },

    updateServer(server) {
        currentServer = server;

        this.trigger(currentServer);
    },

    current() {
        return currentServer;
    }
});

export default ServerStore;
