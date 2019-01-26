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
            src: 'assets/img/exoly/ExoLandPad4.png',
            w: 841,
            h: 474,
            title: "The station as a whole"
        },
        {
            src: 'assets/img/exoly/ExoLandPad3.png',
            w: 1280,
            h: 720,
            title: "The space station's landing pods"
        },
        {
            src: 'assets/img/exoly/ExoLandPadScreen1.png',
            w: 1280,
            h: 720,
            title: "Landing pods from another angle"
        },
        {
            src: 'assets/img/exoly/ExoLandPadScreen2.png',
            w: 1280,
            h: 720,
            title: "An exonaut in front of one of the doors"
        },
        {
            src: 'assets/img/exoly/ExoScreenNvPerso1.png',
            w: 1026,
            h: 433,
            title: "Women also have their place in this universe"
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX1.png',
            w: 1280,
            h: 720,
            title: "The challenger flying over Eclypsia"
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX2.png',
            w: 1280,
            h: 720,
            title: "The challenger flying over the lobby"
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX4.png',
            w: 1280,
            h: 720,
            title: "the station seen from behind"
        },
        {
            src: 'assets/img/exoly/ExoScreenShotX9.png',
            w: 1280,
            h: 720,
            title: "An exonaut soon after getting off the challenger"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly.jpg',
            w: 2080,
            h: 682,
            title: "An exonaut ready for the fight !"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly1_1.jpg',
            w: 2560,
            h: 900,
            title: "An exonaut inspecting his WhiteBird"
        },
        {
            src: 'assets/img/exoly/ScreenShotExoly2.jpg',
            w: 2080,
            h: 682,
            title: "An exonaut in front of a sunset"
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