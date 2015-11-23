var panorama;
var sv;

function initialize() {
    var fenway = {
        lat: 43.472263,
        lng: 141.8498005
    };

    sv = new window.google.maps.StreetViewService();

    panorama = new google.maps.StreetViewPanorama(
        $('#street')[0], {
            position: fenway,
            pov: {
                heading: 19,
                pitch: 10
            },
            clickToGo: false,
            addressControl: false,
            linksControl: false,
            scrollwheel: false,
            panControl: false,
            zoomControl: false
        });
}


$(function() {
    $("body").css("height", $(window).height() + 2 + "px");
    $(window).scrollTop(1);

    boombox.setup();
    var options = {
        src: [{
            media: 'audio/mp4',
            path: 'skate.mp3'
        }]
    };
    boombox.load('sound', options, function(err, audio) {
    });

});

$(window).on('load', function(event) {
    initialize();
});

$(window).on('scroll', function(event) {
    $(window).scrollTop(1);

    sv.getPanoramaById(panorama.links[1].pano, function(data) {
        panorama.setPosition(data.location.latLng);
    })
    boombox.get('sound').stop();
    boombox.get('sound').play();
});
