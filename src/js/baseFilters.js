var config = require('./../../config');

module.exports = [
    {
        type:      'blur',
        label:     'Blur',
        active:    false,
        radius:    1,
        component: require('./components/filters/BlurFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.radius + ')';
        }
    },
    {
        type:      'brightness',
        label:     'Brightness',
        active:    false,
        amount:    0,
        component: require('./components/filters/BrightnessFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'contrast',
        label:     'Contrast',
        active:    false,
        amount:    1,
        component: require('./components/filters/ContrastFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }
    },
    {
        type:      'equalize',
        label:     'Equalize',
        active:    false,
        component: require('./components/filters/EqualizeFilter.jsx'),
        stringify: function () {
            return this.type + '()';
        }
    },
    {
        type:      'fill',
        label:     'Fill',
        active:    false,
        color:     'auto',
        component: require('./components/filters/FillFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.color + ')';
        }
    },
    {
        type:      'noise',
        label:     'Noise',
        active:    false,
        amount:    0,
        component: require('./components/filters/NoiseFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.amount + ')';
        }

    },
    {
        type:      'grayscale',
        label:     'Grayscale',
        active:    false,
        component: require('./components/filters/GrayscaleFilter.jsx'),
        stringify: function () {
            return this.type + '()';
        }
    },
    {
        type:      'no_upscale',
        label:     'No upscale',
        active:    false,
        component: require('./components/filters/NoUpscaleFilter.jsx'),
        stringify: function () {
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
        component:    require('./components/filters/WatermarkFilter.jsx'),
        stringify:    function () {
            return this.type + '(' + this.image + ',' + this.x + ',' + this.y + ',' + this.transparency + ')';
        }
    },
    {
        type:      'strip_icc',
        label:     'Strip ICC',
        active:    false,
        component: require('./components/filters/StripIccFilter.jsx'),
        stringify: function () {
            return this.type + '()';
        }
    },
    {
        type:      'quality',
        label:     'Quality',
        amount:    100,
        active:    false,
        component: require('./components/filters/QualityFilter.jsx'),
        stringify: function () {
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
        component: require('./components/filters/ColorizeFilter.jsx'),
        stringify: function () {
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
        component:     require('./components/filters/SharpenFilter.jsx'),
        stringify:     function () {
            return this.type + '(' + this.amount + ',' + this.radius + ',' + this.luminanceOnly + ')';
        }
    },
    {
        type:      'saturation',
        label:     'Saturation',
        amount:    1.0,
        active:    false,
        component: require('./components/filters/SaturationFilter.jsx'),
        stringify: function () {
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
        component: require('./components/filters/RgbFilter.jsx'),
        stringify: function () {
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
        component: require('./components/filters/RoundCornerFilter.jsx'),
        stringify: function () {
            return this.type + '(' + [this.radius, this.red, this.green, this.blue].join(',') + ')';
        }
    },
    {
        type:      'format',
        label:     'Format',
        format:    'gif',
        active:    false,
        component: require('./components/filters/FormatFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.format + ')';
        }
    },
    {
        type:      'rotate',
        label:     'Rotate',
        angle:     90,
        active:    false,
        component: require('./components/filters/RotateFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.angle + ')';
        }
    },
    {
        type:      'extract_focal',
        label:     'Extract focal',
        active:    false,
        component: require('./components/filters/ExtractFocalFilter.jsx'),
        stringify: function () {
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
        component: require('./components/filters/ConvolutionFilter.jsx'),
        stringify: function () {
            return this.type + '(' + [this.matrix, this.columns, this.normalize].join(',') + ')';
        }
    },
    {
        type:      'max_bytes',
        label:     'Max bytes',
        bytes:     1000,
        active:    false,
        component: require('./components/filters/MaxBytesFilter.jsx'),
        stringify: function () {
            return this.type + '(' + this.bytes + ')';
        }
    },
];