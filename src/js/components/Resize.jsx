/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React         from 'react';
import _             from 'lodash';
import ResizeActions from './../actions/ResizeActions';
import ResizeStore   from './../stores/ResizeStore';
import ToggleControl from './form/ToggleControl.jsx';
import TextControl   from './form/TextControl.jsx';
import SwitchControl from './form/SwitchControl.jsx';


var Resize = React.createClass({
    displayName: 'Resize',

    getInitialState() {
        return {
            resize: ResizeStore.config()
        };
    },

    onChange(key, value) {
        ResizeActions.update(_.merge(this.state.resize, {
            [key]: value
        }));
    },

    render() {
        var resizeModes = [
            { label: 'default', value: 'default' },
            { label: 'smart',   value: 'smart'   },
            { label: 'fit',     value: 'fit'     }
        ];

        return (
            <div className="panel panel--resize">
                <h3 className="panel__title">
                    Resize <i className="fa fa-crop" />
                </h3>
                <div className="panel__content">
                    <div className="control-group">
                        <ToggleControl
                            setting={{ key: 'active', label: 'active' }}
                            onChange={this.onChange}
                            defaultValue={this.state.resize.active}
                            wrapperClass='resize__switch'
                        />
                        <ToggleControl
                            setting={{ key: 'debug', label: 'debug'  }}
                            onChange={this.onChange}
                            defaultValue={this.state.resize.debug}
                            wrapperClass='resize__switch'
                        />
                    </div>
                    <SwitchControl
                        setting={{ label: 'mode', key: 'mode' }}
                        defaultValue='default'
                        options={resizeModes}
                        onChange={this.onChange}
                        defaultValue={this.state.resize.mode}
                    />
                    <TextControl
                        setting={{ key: 'width',  label: 'width' }}
                        defaultValue={this.state.resize.width}
                        onChange={this.onChange}
                    />
                    <TextControl
                        setting={{ key: 'height', label: 'height' }}
                        defaultValue={this.state.resize.height}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
});

export default Resize;
