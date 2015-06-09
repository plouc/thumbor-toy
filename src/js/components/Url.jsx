import React from 'react';

var Url = React.createClass({
    displayName: 'Url',

    render() {
        var statusClasses = 'url__status';
        var statusNode = null;
        if (this.props.error === true) {
            statusClasses += ' _has-error';
            statusNode = <i className="fa fa-warning"/>;
        } else if (this.props.url === '') {
            statusClasses += ' _is-unkown';
            statusNode = <i className="fa fa-question"/>;
        } else {
            statusNode = <i className="fa fa-check"/>;
        }

        return (
            <div>
                <input type="text" readOnly value={this.props.url} />
                <span className={statusClasses}>
                    {statusNode}
                </span>
            </div>
        );
    }
});

export default Url;
