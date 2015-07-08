/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React         from 'react';
import Reflux        from 'reflux';
import ConfigStore   from './../stores/ConfigStore';
import SourceActions from './../actions/SourceActions';
import ResizeActions from './../actions/ResizeActions';
import FilterActions from './../actions/FilterActions';
import _             from 'lodash';

var PresetSelector = React.createClass({
    displayName: 'PresetSelector',

    mixins: [Reflux.ListenerMixin],

    onChange(e) {
        var imageData = this.props.images[e.target.value].data;

        if (null === imageData.image || null === imageData.server) {
            return;
        }

        SourceActions.setServer(imageData.server);
        SourceActions.setImage(imageData.image);
        ResizeActions.clear();
        ResizeActions.update(imageData.resize);
        FilterActions.clear();
        _.forEach(imageData.filters, function (filter) {
            FilterActions.add(filter.type);
            //FilterActions.update(index, filter.settings);
        });
    },

    render() {
        this.props.images = [{
            label: '--- select a preset image ---',
            data:  {
                server:  null,
                image:   null,
                resize:  {},
                filters: []
            }
        }].concat(ConfigStore.get('presetImages'));

        var options = this.props.images.map((image, i) => {
            return <option key={i} value={i}>{image.label}</option>;
        });

        return (
            <div className="panel panel--img-src">
                <h3 className="panel__title">
                    <i className="fa fa-image" />
                    Preset images
                </h3>
                <div className="panel__content">
                    <div className="select-box">
                        <select className="control--full-width"
                                onChange={this.onChange}>
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
