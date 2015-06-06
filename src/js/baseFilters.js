import config from './../../config';

export default [
    {
        type:           'blur',
        label:          'Blur',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Blur)',
        template:       '${ radius }',
        settingsConfig: [
            { key: 'radius', type: 'text', label: 'Radius', defaultValue: 1, default: 1 }
        ]
    },
    {
        type:           'brightness',
        label:          'Brightness',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Brightness)',
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount', default: 0 }
        ]
    },
    {
        type:           'contrast',
        label:          'Contrast',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Contrast)',
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount', default: 1 }
        ]
    },
    {
        type:           'equalize',
        label:          'Equalize',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Equalize)',
    },
    {
        type:           'fill',
        label:          'Fill',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Filling)',
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
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount (%)', default: 0 }
        ]
    },
    {
        type:           'grayscale',
        label:          'Grayscale',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Grayscale)',
    },
    {
        type:           'no_upscale',
        label:          'No upscale',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/No-Upscale)',
    },
    {
        type:           'watermark',
        label:          'Watermark',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Watermark)',
        template:       '${ image },${ x },${ y },${ transparency }',
        settingsConfig: [
            { key: 'image',        type: 'choice', label: 'Image',      default: null, choices: [] },
            { key: 'x',            type: 'text',   label: 'X position', default: 10                },
            { key: 'y',            type: 'text',   label: 'Y position', default: 10                },
            { key: 'transparency', type: 'text',   label: 'Alpha',      default: 0                 }
        ]
    },
    {
        type:           'strip_icc',
        label:          'Strip ICC',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Strip-icc)',
    },
    {
        type:           'quality',
        label:          'Quality',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Quality)',
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Amount (%)', default: 100 }
        ]
    },
    {
        type:           'colorize',
        label:          'Colorize',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Colorize)',
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
        template:       '${ amount }',
        settingsConfig: [
            { key: 'amount', type: 'text', label: 'Percentage (%)', default: 1.0 }
        ]
    },
    {
        type:           'rgb',
        label:          'RGB',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Rgb)',
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
        template:       '${ format }',
        settingsConfig: [
            { key: 'format', type: 'choice', label: 'Output Format', default: 'gif', choices: [
                { value: 'jpeg', label: 'jpeg' },
                { value: 'gif',  label: 'gif'  },
                { value: 'png',  label: 'png'  },
                { value: 'webp', label: 'webp' }
            ]}
        ]
    },
    {
        type:           'rotate',
        label:          'Rotate',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Rotate)',
        template:       '${ angle }',
        settingsConfig: [
            { key: 'angle', type: 'choice', label: 'Angle', default: 0, choices: [
                { value: 0,   label: 0   },
                { value: 90,  label: 90  },
                { value: 180, label: 180 },
                { value: 270, label: 270 }
            ]}
        ]
    },
    {
        type:           'extract_focal',
        label:          'Extract focal',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Extract-Focal-Points)',
    },
    {
        type:           'convolution',
        label:          'Convolution',
        description:    '[Official thumbor documentation](https://github.com/thumbor/thumbor/wiki/Convolution)',
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
        template:       '${ bytes }',
        settingsConfig: [
            { key: 'bytes', type: 'text', label: 'Max Number (bytes)', default: 1000 }
        ]
    }
];
