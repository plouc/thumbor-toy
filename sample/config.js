/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var watermarkImages = [
];

export default {
    source: {
        serverInput: true,
        servers: [
            { label: 'thumbor demo site', value: 'http://thumbor.thumborize.me/' }
        ],
        imageInput: true,
        images: [
            { label: 'sample image', value: 'thumborize.me/static/img/beach.jpg' }
        ],
        customInput: true
    },
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
            description:    'Resized watermark to fit original image',
            template:       '${ image },${ transparency }',
            settingsConfig: [
                { key: 'image',        type: 'choice', label: 'Image',        default: null, choices: watermarkImages },
                { key: 'transparency', type: 'text',   label: 'Transparency', default: 0 }
            ]
        },
        {
            type:           'overlay',
            label:          'Overlay',
            description:    '**Overlay** filter',
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
    ]
};
