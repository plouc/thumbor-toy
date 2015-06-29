/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react';
import ReactZeroClipboard   from 'react-zeroclipboard';
import SourceStore          from './../stores/SourceStore';


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
        let statusClasses = 'url__status';
        let statusNode    = null;
        if (this.props.error === true) {
            statusClasses += ' _has-error';
            statusNode = <i className="fa fa-warning"/>;
        } else if (this.props.url === '' || !SourceStore.isValid()) {
            statusClasses += ' _is-unkown';
            statusNode = <i className="fa fa-question"/>;
        } else {
            statusNode = <i className="fa fa-check"/>;
        }

        return (
            <div className="url">
                <input className="url__field" type="text" readOnly value={this.props.url} />
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
