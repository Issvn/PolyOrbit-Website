var toggleGallery = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'assets/img/exoly/Capture.png',
            w: 1022,
            h: 359
        },
        {
            src: 'assets/img/exoly/CraftScreen4.png',
            w: 2560,
            h: 1080
        },
        {
            src: 'assets/img/exoly/ExoLandPad3.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoLandPad4.png',
            w: 841,
            h: 474
        },
        {
            src: 'assets/img/exoly/ExoLandPadScreen1.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoLandPadScreen2.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoScreenNvPerso1.png',
            w: 1026,
            h: 433
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX1.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX2.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX4.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX6.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX7.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX9.png',
            w: 1280,
            h: 720
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly.jpg',
            w: 2080,
            h: 682
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly1_1.jpg',
            w: 2560,
            h: 900
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly2.jpg',
            w: 2080,
            h: 682
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}
document.getElementById('gallerybtn').onclick = toggleGallery;