# thumbor-toy

Want to see it in action ? check the [demo](http://plouc.github.io/thumbor-toy/)

[<img src="https://raw.github.com/plouc/thumbor-toy/master/doc/thumbor-toy-screenshot.jpg">](http://plouc.github.io/thumbor-toy/)

## Install

### Dependencies install

```
npm install
bower install
```

### Configuration

Create a config.js file with the config for your application, for instance:

```javascript
module.exports = {

    // This is an optional config, to provide sample images pre-filtered & resized
    presetImages: [{
        label: 'Image 1',
        data: {
            server:  'http://server1.com/',
            image:   'image1.jpg',
            resize:  {
                active: true,
                width:  600,
                height: 600,
                smart:  true,
                debug:  false,
                fit:    false,
            },
            filters: [{
                type: 'watermark',
                settings: {
                    image:        'watermark.png',
                    x:            10,
                    y:            10,
                    transparency: 0,
                }
            }]
        }
    }],

    // server base url ; this can also take an array such as: [{label: 'server1', 'url': 'http://server1.com'}, {label: 'server2', 'url': 'http://server2.com'}]
    server: 'http://my.thumbor.server/',

    // available filters
    filters: [
        'blur',
        'noise',
        'watermark',
        'brightness',
        'grayscale'
    ],

    // available images
    images: [
        { label: 'first image',        src: 'image1.png' },
        { label: 'second image',       src: 'image2.png' }
    ],

    // available watermark images
    watermarkImages: [
        { label: 'copyright watermark', src: 'watermark.png' },
    ]
};
```

### Compile assets

```
gulp
```
