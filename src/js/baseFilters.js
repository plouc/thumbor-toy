import config from './../../config';

import EqualizeFilter     from './components/filters/EqualizeFilter.jsx';
import FillFilter         from './components/filters/FillFilter.jsx';
import NoiseFilter        from './components/filters/NoiseFilter.jsx';
import GrayscaleFilter    from './components/filters/GrayscaleFilter.jsx';
import NoUpscaleFilter    from './components/filters/NoUpscaleFilter.jsx';
import WatermarkFilter    from './components/filters/WatermarkFilter.jsx';
import StripIccFilter     from './components/filters/StripIccFilter.jsx';
import QualityFilter      from './components/filters/QualityFilter.jsx';
import ColorizeFilter     from './components/filters/ColorizeFilter.jsx';
import SharpenFilter      from './components/filters/SharpenFilter.jsx';
import SaturationFilter   from './components/filters/SaturationFilter.jsx';
import RgbFilter          from './components/filters/RgbFilter.jsx';
import RoundCornerFilter  from './components/filters/RoundCornerFilter.jsx';
import FormatFilter       from './components/filters/FormatFilter.jsx';
import RotateFilter       from './components/filters/RotateFilter.jsx';
import ExtractFocalFilter from './components/filters/ExtractFocalFilter.jsx';
import ConvolutionFilter  from './components/filters/ConvolutionFilter.jsx';
import MaxBytesFilter     from './components/filters/MaxBytesFilter.jsx';

import ImprovedBaseFilter from './components/filters/ImprovedBaseFilter.jsx';

export default [
    {
        type:           'blur',
        label:          'Blur',
        active:         false,
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Blur)',
        settingsConfig: [
            { key: 'radius', type: 'text', label: 'Radius', defaultValue: 1, default: 1 }
        ],
        component:      ImprovedBaseFilter,
        stringify()     {
            return this.type + '(' + this.settings.radius + ')';
        }
    },
    {
        type:        'brightness',
        label:       'Brightness',
        active:      false,
        amount:      0,
        settingsConfig:    [
            { key: 'amount', type: 'text', label: 'Amount', default: 0 }
        ],
        component:  ImprovedBaseFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Brightness)',
        stringify() {
            return this.type + '(' + this.settings.amount + ')';
        }
    },
    {
        type:        'contrast',
        label:       'Contrast',
        settingsConfig:    [
            { key: 'amount', type: 'text', label: 'Amount', default: 1 }
        ],
        component:  ImprovedBaseFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Contrast)',
        stringify() {
            return this.type + '(' + this.settings.amount + ')';
        }
    },
    {
        type:        'equalize',
        label:       'Equalize',
        component:   EqualizeFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Equalize)',
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:            'fill',
        label:           'Fill',
        color:           'auto',
        fillTransparent: false,
        component:       FillFilter,
        description:     '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Filling)',
        stringify() {
            return `${ this.type }(${ [this.color, this.fillTransparent].join(',') })`;
        }
    },
    {
        type:        'noise',
        label:       'Noise',
        amount:      0,
        component:   NoiseFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Noise)',
        stringify() {
            return this.type + '(' + this.amount + ')';
        }

    },
    {
        type:        'grayscale',
        label:       'Grayscale',
        component:   GrayscaleFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Grayscale)',
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:        'no_upscale',
        label:       'No upscale',
        component:   NoUpscaleFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/No-Upscale)',
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:         'watermark',
        label:        'Watermark',
        image:        config.watermarkImages[0].src,
        x:            10,
        y:            10,
        transparency: 0,
        component:    WatermarkFilter,
        description:  '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Watermark)',
        stringify() {
            return this.type + '(' + this.image + ',' + this.x + ',' + this.y + ',' + this.transparency + ')';
        }
    },
    {
        type:        'strip_icc',
        label:       'Strip ICC',
        component:   StripIccFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Strip-icc)',
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:        'quality',
        label:       'Quality',
        amount:      100,
        component:   QualityFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Quality)',
        stringify() {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:        'colorize',
        label:       'Colorize',
        red:         100,
        green:       100,
        blue:        100,
        color:       'ff0000',
        component:   ColorizeFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Colorize)',
        stringify() {
            return this.type + '(' + [this.red, this.green, this.blue, this.color].join(',') + ')';
        }
    },
    {
        type:          'sharpen',
        label:         'Sharpen',
        amount:        3,
        radius:        1.0,
        luminanceOnly: true,
        component:     SharpenFilter,
        description:   '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Sharpen)',
        stringify() {
            return this.type + '(' + this.amount + ',' + this.radius + ',' + this.luminanceOnly + ')';
        }
    },
    {
        type:        'saturation',
        label:       'Saturation',
        amount:      1.0,
        component:   SaturationFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Saturation)',
        stringify() {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:        'rgb',
        label:       'RGB',
        red:         0,
        green:       0,
        blue:        0,
        component:   RgbFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Rgb)',
        stringify() {
            return this.type + '(' + [this.red, this.green, this.blue].join(',') + ')';
        }
    },
    {
        type:        'round_corner',
        label:       'Round corner',
        radius:      10,
        red:         100,
        green:       100,
        blue:        100,
        component:   RoundCornerFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Round-corners)',
        stringify() {
            return this.type + '(' + [this.radius, this.red, this.green, this.blue].join(',') + ')';
        }
    },
    {
        type:        'format',
        label:       'Format',
        format:      'gif',
        component:   FormatFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Format)',
        stringify() {
            return this.type + '(' + this.format + ')';
        }
    },
    {
        type:        'rotate',
        label:       'Rotate',
        angle:       90,
        component:   RotateFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Rotate)',
        stringify() {
            return `${ this.type }(${ this.angle })`;
        }
    },
    {
        type:        'extract_focal',
        label:       'Extract focal',
        component:   ExtractFocalFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Extract-Focal-Points)',
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:        'convolution',
        label:       'Convolution',
        matrix:      '-1;-1;-1;-1;8;-1;-1;-1;-1',
        columns:     3,
        normalize:   false,
        component:   ConvolutionFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Convolution)',
        stringify() {
            return this.type + '(' + [this.matrix, this.columns, this.normalize].join(',') + ')';
        }
    },
    {
        type:        'max_bytes',
        label:       'Max bytes',
        bytes:       1000,
        component:   MaxBytesFilter,
        description: '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Max-bytes)',
        stringify() {
            return this.type + '(' + this.bytes + ')';
        }
    }
];
