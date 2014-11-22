# thumbor-toy

[<img src="https://raw.github.com/plouc/thumbor-toy/master/doc/thumbor-toy-screenshot.jpg">](https://github.com/plouc/thumbor-toy)

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
    // thumbor server base url
    baseUrl: 'http://my.thumbor.server/',

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
