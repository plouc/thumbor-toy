import config from './../../config';

import ImprovedBaseFilter from './components/filters/ImprovedBaseFilter.jsx';

export default [
    {
        type:           'blur',
        label:          'Blur',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Blur)',
        component:      ImprovedBaseFilter,
        template:       '${ radius }',
        settingsConfig: [
            { key: 'radius', type: 'text', label: 'Radius', defaultValue: 1, default: 1 }
        ]
    },
    {
        type:           'brightness',
        label:          'Brightness',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Brightness)',
        component:      ImprovedBaseFilter,
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount', default: 0 }
        ]
    },
    {
        type:           'contrast',
        label:          'Contrast',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Contrast)',
        component:      ImprovedBaseFilter,
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount', default: 1 }
        ]
    },
    {
        type:           'equalize',
        label:          'Equalize',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Equalize)',
        component:      ImprovedBaseFilter
    },
    {
        type:           'fill',
        label:          'Fill',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Filling)',
        component:      ImprovedBaseFilter,
        template:       '${ color },${ fillTransparent }',
        settingsConfig: [
            { key: 'color',           type: 'text',   label: 'Color (hex)',      default: 'auto' },
            { key: 'fillTransparent', type: 'toggle', label: 'Fill Transparent', default: false  }
        ]
    },
    {
        type:           'noise',
        label:          'Noise',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Noise)',
        component:      ImprovedBaseFilter,
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount (%)', default: 0 }
        ]
    },
    {
        type:           'grayscale',
        label:          'Grayscale',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Grayscale)',
        component:      ImprovedBaseFilter
    },
    {
        type:           'no_upscale',
        label:          'No upscale',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/No-Upscale)',
        component:      ImprovedBaseFilter
    },
    {
        type:           'watermark',
        label:          'Watermark',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Watermark)',
        component:      ImprovedBaseFilter,
        template:       '${ image },${ x },${ y },${ transparency }',
        settingsConfig: [
            { key: 'image',        type: 'text', label: 'Image',      default: config.watermarkImages[0].src },
            { key: 'x',            type: 'text', label: 'X position', default: 10                            },
            { key: 'y',            type: 'text', label: 'Y position', default: 10                            },
            { key: 'transparency', type: 'text', label: 'Alpha',      default: 0                             }
        ]
    },
    {
        type:           'strip_icc',
        label:          'Strip ICC',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Strip-icc)',
        component:      ImprovedBaseFilter
    },
    {
        type:           'quality',
        label:          'Quality',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Quality)',
        component:      ImprovedBaseFilter,
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount (%)', default: 100 }
        ]
    },
    {
        type:           'colorize',
        label:          'Colorize',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Colorize)',
        component:      ImprovedBaseFilter,
        template:       '${ red },${ green },${ blue },${ color }',
        settingsConfig: [
            { key: 'red',   type: 'text', label: 'Red (%)',          default: 100      },
            { key: 'green', type: 'text', label: 'Green (%)',        default: 100      },
            { key: 'blue',  type: 'text', label: 'Blue (%)',         default: 100      },
            { key: 'color', type: 'text', label: 'Fill Color (hex)', default: 'ff0000' }
        ]
    },
    {
        type:           'sharpen',
        label:          'Sharpen',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Sharpen)',
        component:      ImprovedBaseFilter,
        template:       '${ amount },${ radius },${ luminanceOnly }',
        settingsConfig: [
            { key: 'amount',        type: 'text',   label: 'Amount',         default: 3    },
            { key: 'radius',        type: 'text',   label: 'Radius',         default: 1.0  },
            { key: 'luminanceOnly', type: 'toggle', label: 'Luminance Only', default: true }
        ]
    },
    {
        type:           'saturation',
        label:          'Saturation',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Saturation)',
        component:      ImprovedBaseFilter,
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Percentage (%)', default: 1.0 }
        ]
    },
    {
        type:           'rgb',
        label:          'RGB',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Rgb)',
        component:      ImprovedBaseFilter,
        template:       '${ red },${ green },${ blue }',
        settingsConfig: [
            { key: 'red',    type: 'text', label: 'Red Amount',   default: 0 },
            { key: 'green',  type: 'text', label: 'Green Amount', default: 0 },
            { key: 'blue',   type: 'text', label: 'Blue Amount',  default: 0 }
        ]
    },
    {
        type:           'round_corner',
        label:          'Round corner',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Round-corners)',
        component:      ImprovedBaseFilter,
        template:       '${ radius },${ red },${ green },${ blue }',
        settingsConfig: [
            { key: 'radius', type: 'text', label: 'Radius',       default: 10  },
            { key: 'red',    type: 'text', label: 'Red (dec.)',   default: 100 },
            { key: 'green',  type: 'text', label: 'Green (dec.)', default: 100 },
            { key: 'blue',   type: 'text', label: 'Blue (dec.)',  default: 100 }
        ]
    },
    {
        type:           'format',
        label:          'Format',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Format)',
        component:      ImprovedBaseFilter,
        template:       '${ format }',
        settingsConfig: [
            { key: 'format', type: 'text', label: 'Output Format', default: 'gif' }
        ]
    },
    {
        type:           'rotate',
        label:          'Rotate',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Rotate)',
        component:      ImprovedBaseFilter,
        template:       '${ angle }',
        settingsConfig: [
            { key: 'angle', type: 'text', label: 'Angle', default: 90 }
        ]
    },
    {
        type:           'extract_focal',
        label:          'Extract focal',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Extract-Focal-Points)',
        component:      ImprovedBaseFilter
    },
    {
        type:           'convolution',
        label:          'Convolution',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Convolution)',
        component:      ImprovedBaseFilter,
        template:       '${ matrix },${ columns },${ normalize }',
        settingsConfig: [
            { key: 'matrix',    type: 'text',   label: 'Matrix Items',      default: '-1;-1;-1;-1;8;-1;-1;-1;-1' },
            { key: 'columns',   type: 'text',   label: 'Number of Columns', default: 3                           },
            { key: 'normalize', type: 'toggle', label: 'Should Normalize',  default: false                       }
        ]
    },
    {
        type:           'max_bytes',
        label:          'Max bytes',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Max-bytes)',
        component:      ImprovedBaseFilter,
        template:       '${ bytes }',
        settingsConfig: [
            { key: 'bytes', type: 'text', label: 'Max Number (bytes)', default: 1000 }
        ]
    }
];
