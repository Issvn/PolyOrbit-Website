var toggleGallery = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'assets/img/exoly/Capture.png',
            w: 1022,
            h: 359,
            title: 'Landscape picture of Eclipsia'
        },
        {
            src: 'assets/img/exoly/CraftScreen4.png',
            w: 2560,
            h: 1080,
            title: 'The character and the WhiteBird spacecraft'
        },
        {
            src: 'assets/img/exoly/ExoLandPadScreen1.png',
            w: 1280,
            h: 720,
            title: "The Whitebird parked at the station"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly340192.png',
            w: 2820,
            h: 1762,
            title: "Two Exonauts running to their Whitebird"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly2097509.png',
            w: 2820,
            h: 1762,
            title: "An Exonaut observing the beauty of the landscape"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly3389932.png',
            w: 2820,
            h: 1762,
            title: "Two Exonauts contemplating the beauty of space"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly2096155.png',
            w: 3132,
            h: 1762,
            title: "An Exonaut lost in NoreD32"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly1082156.png',
            w: 3132,
            h: 1762,
            title: "Someone is building his base"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly9620518.png',
            w: 3132,
            h: 1762,
            title: "An Exonaut proud of his base" 
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