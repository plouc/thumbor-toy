# Install

```
npm install
bower install
```

Create a config.js file with the config for your application, for instance:

```javascript
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
```

 
```
gulp
```
