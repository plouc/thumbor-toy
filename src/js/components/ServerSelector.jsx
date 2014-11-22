var React         = require('react/addons');
var Reflux        = require('reflux');
var config        = require('./../../../config');
var ServerActions = require('./../actions/ServerActions');

var ServerSelector = React.createClass({
    mixins: [Reflux.ListenerMixin],

    render: function () {
        var servers = [{
            label: '--- select a server ---',
            src:   null
        }].concat(config.server);

        var options = servers.map(function (server, i) {
            return <option key={i} value={server.url}>{server.label}</option>
        });

        return <div className="panel panel--img-src">
            <h3 className="panel__title">
                <i className="fa fa-hdd-o" />
                Server
            </h3>
            <div className="panel__content">
                <div className="select-box">
                    <select className="control--full-width"
                            onChange={this._onChange}>
                        {options}
                    </select>
                    <i className="fa fa-angle-down" />
                </div>
            </div>
        </div>;
    },

    _onChange: function (e) {
        ServerActions.set(e.target.value);
    }
});

module.exports = ServerSelector;
