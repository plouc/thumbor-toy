/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { PropTypes } from 'react';
import PresetsActions       from './../actions/PresetsActions';


const PresetSelector = React.createClass({
    displayName: 'PresetSelector',

    propTypes: {
        presets: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            data:  PropTypes.object.isRequired
        })).isRequired
    },

    onPresetSelection(e) {
        let index = parseInt(e.target.value);
        if (index === -1) {
            return;
        }

        let { presets } = this.props;

        PresetsActions.load(presets[index]);
    },

    render() {
        let { presets } = this.props;

        let options = presets.map((preset, i) => {
            return <option key={i} value={i}>{preset.label}</option>;
        });

        // prepend an empty option
        options.unshift(<option key={-1} value={-1}>--- select a preset image ---</option>);

        return (
            <div className="panel panel--img-src">
                <h3 className="panel__title">
                    <i className="fa fa-image" />
                    Preset images
                </h3>
                <div className="panel__content">
                    <div className="select-box">
                        <select className="control--full-width" onChange={this.onPresetSelection}>
                            {options}
                        </select>
                        <i className="fa fa-angle-down" />
                    </div>
                </div>
            </div>
        );
    }
});

export default PresetSelector;
