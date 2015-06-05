import React         from 'react';
import Reflux        from 'reflux';
import config        from './../../../config';
import ServerActions from './../actions/ServerActions';

var ServerSelector = React.createClass({
    displayName: 'ServerSelector',

    mixins: [Reflux.ListenerMixin],

    onChange(e) {
        ServerActions.set(e.target.value);
    },

    render() {
        var servers = [{
            label: '--- select a server ---',
            src:   null
        }].concat(config.server);

        var options = servers.map((server, i) => {
            return <option key={i} value={server.url}>{server.label}</option>;
        });

        return (
            <div className="panel panel--img-src">
                <h3 className="panel__title">
                    <i className="fa fa-hdd-o" />
                    Server
                </h3>
                <div className="panel__content">
                    <div className="select-box">
                        <select className="control--full-width" onChange={this.onChange}>
                            {options}
                        </select>
                        <i className="fa fa-angle-down" />
                    </div>
                </div>
            </div>
        );
    }
});

export default ServerSelector;
