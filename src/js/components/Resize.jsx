/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React             from 'react';
import { ListenerMixin } from 'reflux';
import _                 from 'lodash';
import ResizeActions     from './../actions/ResizeActions';
import ResizeStore       from './../stores/ResizeStore';
import SourceStore       from './../stores/SourceStore';
import ToggleControl     from './form/ToggleControl.jsx';
import TextControl       from './form/TextControl.jsx';
import SwitchControl     from './form/SwitchControl.jsx';


var Resize = React.createClass({
    displayName: 'Resize',

    mixins: [ListenerMixin],

    componentWillMount() {
        this.listenTo(SourceStore, this.onSourceUpdate);
        this.listenTo(ResizeStore, this.onResizeUpdate);
    },

    getInitialState() {
        return {
            active: SourceStore.isValid(),
            resize: ResizeStore.config()
        };
    },

    onSourceUpdate() {
        this.setState({
            active: SourceStore.isValid()
        });
    },

    onResizeUpdate() {
        this.setState({
            resize: ResizeStore.config()
        });
    },

    onChange(key, value) {
        let { resize } = this.state;

        ResizeActions.update(_.merge(resize, {
            [key]: value
        }));
    },

    render() {
        var resizeModes = [
            { label: 'default', value: 'default' },
            { label: 'smart',   value: 'smart'   },
            { label: 'fit',     value: 'fit'     }
        ];

        let { resize, active } = this.state;

        let contentClasses = 'panel__content';
        if (active === false) {
            contentClasses += ' _is-hidden';
        }

        return (
            <div className="panel panel--resize">
                <h3 className="panel__title">
                    Resize <i className="fa fa-crop" />
                </h3>
                <div className="panel__content">
                    <div className="control-group">
                        <ToggleControl
                            propKey="active" label="active"
                            onChange={this.onChange}
                            value={resize.active}
                            wrapperClass='resize__switch'
                        />
                        <ToggleControl
                            propKey="debug" label="debug"
                            onChange={this.onChange}
                            value={resize.debug}
                            wrapperClass='resize__switch'
                        />
                    </div>
                    <SwitchControl
                        propKey="mode" label=""
                        choices={resizeModes}
                        onChange={this.onChange}
                        value={resize.mode}
                    />
                    <TextControl
                        propKey="width" label="width"
                        value={resize.width}
                        onChange={this.onChange}
                    />
                    <TextControl
                        propKey="height" label="height"
                        value={resize.height}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
});

export default Resize;
