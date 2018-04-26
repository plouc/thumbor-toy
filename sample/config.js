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
    common: {
        modes: [],
        source: {
            servers: [
                {
                    label:  'thumbor local dev site',
                    value:  'http://127.0.0.1:8888/',
                    images: [
                        { label: 'sample image', value: 'thumborize.me/static/img/beach.jpg' }
                    ]
                },
                {
                    label:  'thumbor demo site',
                    value:  'http://thumbor.thumborize.me/',
                    images: [
                        { label: 'sample image', value: 'thumborize.me/static/img/beach.jpg' }
                    ]
                }
            ]
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
            }
        ]
    },
};
