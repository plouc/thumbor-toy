import React, { Component } from 'react';
import ReactZeroClipboard   from 'react-zeroclipboard';

class Url extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: false
        };
        this.timer = null;
    }

    onAfterCopy() {
        this.setState({
            notice: true
        });
    }

    onCopyHover() {
        this.setState({
            notice: false
        });
    }

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
                <ReactZeroClipboard text={this.props.url} onAfterCopy={this.onAfterCopy.bind(this)}>
                    <span className="url__copy" onMouseEnter={this.onCopyHover.bind(this)}>
                        <i className="fa fa-clipboard"/>
                    </span>
                </ReactZeroClipboard>
                <span className="url__copy__tooltip">
                    {this.state.notice ? 'copied' : 'copy to clipboard' }
                </span>
            </div>
        );
    }
}

export default Url;
