var watermarkImages = [
];

export default {
    server: [
        { label: 'thumbor demo site', url: 'http://thumbor.thumborize.me/' },
    ],

    filters: [
        'blur',
        'brightness',
        'colorize',
        'contrast',
        'convolution',
        'equalize',
        'extract_focal',
        'fill',
        'format',
        'grayscale',
        'max_bytes',
        'noise',
        'no_upscale',
        'quality',
        'rgb',
        'rotate',
        'round_corner',
        'saturation',
        'sharpen',
        'strip_icc',
        {
            type: 'watermark',
            settingsConfig: [
                { choices: watermarkImages }
            ]
        },
        {
            type:           'fit_watermark',
            label:          'Fit Watermark',
            description:    'Custom Canal+ filter to add resized watermark',
            template:       '${ image },${ transparency }',
            settingsConfig: [
                { key: 'image',        type: 'choice', label: 'Image',        default: null, choices: watermarkImages },
                { key: 'transparency', type: 'text',   label: 'Transparency', default: 0 }
            ]
        },
        {
            type:           'overlay',
            label:          'Overlay',
            description:    'Custom Canal+ infosheet filter **Overlay**',
            template:       '${ image },${ transparency },${ width },${ height },${ x },${ y }',
            settingsConfig: [
                { key: 'image',        type: 'choice', label: 'Image',        default: null, choices: watermarkImages },
                { key: 'width',        type: 'text',   label: 'Width',        default: 900  },
                { key: 'height',       type: 'text',   label: 'Height',       default: 506  },
                { key: 'x',            type: 'text',   label: 'X position',   default: 450  },
                { key: 'y',            type: 'text',   label: 'Y position',   default: -230 },
                { key: 'transparency', type: 'text',   label: 'Transparency', default: 0    }
            ]
        }
    ],

    images: [
        { label: 'sample image', src: 'thumborize.me/static/img/beach.jpg' }
    ]
};