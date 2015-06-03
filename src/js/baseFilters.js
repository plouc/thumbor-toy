import config from './../../config';

import BlurFilter         from './components/filters/BlurFilter.jsx';
import BrightnessFilter   from './components/filters/BrightnessFilter.jsx';
import ContrastFilter     from './components/filters/ContrastFilter.jsx';
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


export default [
    {
        type:      'blur',
        label:     'Blur',
        active:    false,
        radius:    1,
        component: BlurFilter,
        stringify() {
            return this.type + '(' + this.radius + ')';
        }
    },
    {
        type:      'brightness',
        label:     'Brightness',
        active:    false,
        amount:    0,
        component: BrightnessFilter,
        stringify() {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'contrast',
        label:     'Contrast',
        active:    false,
        amount:    1,
        component: ContrastFilter,
        stringify() {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'equalize',
        label:     'Equalize',
        active:    false,
        component: EqualizeFilter,
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:      'fill',
        label:     'Fill',
        active:    false,
        color:     'auto',
        component: FillFilter,
        stringify() {
            return this.type + '(' + this.color + ')';
        }
    },
    {
        type:      'noise',
        label:     'Noise',
        active:    false,
        amount:    0,
        component: NoiseFilter,
        stringify() {
            return this.type + '(' + this.amount + ')';
        }

    },
    {
        type:      'grayscale',
        label:     'Grayscale',
        active:    false,
        component: GrayscaleFilter,
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:      'no_upscale',
        label:     'No upscale',
        active:    false,
        component: NoUpscaleFilter,
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:         'watermark',
        label:        'Watermark',
        active:       false,
        image:        config.watermarkImages[0].src,
        x:            10,
        y:            10,
        transparency: 0,
        component:    WatermarkFilter,
        stringify() {
            return this.type + '(' + this.image + ',' + this.x + ',' + this.y + ',' + this.transparency + ')';
        }
    },
    {
        type:      'strip_icc',
        label:     'Strip ICC',
        active:    false,
        component: StripIccFilter,
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:      'quality',
        label:     'Quality',
        amount:    100,
        active:    false,
        component: QualityFilter,
        stringify() {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'colorize',
        label:     'Colorize',
        red:       100,
        green:     100,
        blue:      100,
        color:     'ff0000',
        active:    false,
        component: ColorizeFilter,
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
        active:        false,
        component:     SharpenFilter,
        stringify() {
            return this.type + '(' + this.amount + ',' + this.radius + ',' + this.luminanceOnly + ')';
        }
    },
    {
        type:      'saturation',
        label:     'Saturation',
        amount:    1.0,
        active:    false,
        component: SaturationFilter,
        stringify() {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'rgb',
        label:     'RGB',
        red:       0,
        green:     0,
        blue:      0,
        active:    false,
        component: RgbFilter,
        stringify() {
            return this.type + '(' + [this.red, this.green, this.blue].join(',') + ')';
        }
    },
    {
        type:      'round_corner',
        label:     'Round corner',
        radius:    10,
        red:       100,
        green:     100,
        blue:      100,
        active:    false,
        component: RoundCornerFilter,
        stringify() {
            return this.type + '(' + [this.radius, this.red, this.green, this.blue].join(',') + ')';
        }
    },
    {
        type:      'format',
        label:     'Format',
        format:    'gif',
        active:    false,
        component: FormatFilter,
        stringify() {
            return this.type + '(' + this.format + ')';
        }
    },
    {
        type:      'rotate',
        label:     'Rotate',
        angle:     90,
        active:    false,
        component: RotateFilter,
        stringify() {
            return this.type + '(' + this.angle + ')';
        }
    },
    {
        type:      'extract_focal',
        label:     'Extract focal',
        active:    false,
        component: ExtractFocalFilter,
        stringify() {
            return this.type + '()';
        }
    },
    {
        type:      'convolution',
        label:     'Convolution',
        matrix:    '-1;-1;-1;-1;8;-1;-1;-1;-1',
        columns:   3,
        normalize: false,
        active:    false,
        component: ConvolutionFilter,
        stringify() {
            return this.type + '(' + [this.matrix, this.columns, this.normalize].join(',') + ')';
        }
    },
    {
        type:      'max_bytes',
        label:     'Max bytes',
        bytes:     1000,
        active:    false,
        component: MaxBytesFilter,
        stringify() {
            return this.type + '(' + this.bytes + ')';
        }
    }
];
