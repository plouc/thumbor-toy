# Install

1. ``npm install``
2. ``bower install``
3. Create a config.js file with the config for your application, for instance:

    module.exports = {
        baseUrl: 'http://my.thumbor.server/',
        images: [
            { label: 'first image',        src: 'image1.png' },
            { label: 'second image',       src: 'image2.png' }
        ],

        watermarkImages: [
            { label: 'copyright watermark', src: 'watermark.png' },
        ]
    };
    
4. ``gulp``