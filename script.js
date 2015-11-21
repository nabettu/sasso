var map;
var panorama;

function initialize() {
    if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(35.659683, 139.742956), 16);

        var street = new GStreetviewOverlay();
        map.addOverlay(street);

        var slatlng = new GLatLng(35.659683, 139.742956);
        var option = {
            latlng: slatlng
        };

        var scontainer = document.getElementById("street");
        panorama = new GStreetviewPanorama(scontainer, option);

        GEvent.addListener(map, "click", moveCenter);
    }
}

function moveCenter(overlay, latlng) {
    map.panTo(latlng);
    panorama.setLocationAndPOV(latlng);
}


$(function() {
    GUnload();
    $("body").css("height", $(window).height() + 2 + "px")
    $(window).scrollTop(1);
});

$(window).on('load', function(event) {
    initialize();
});

$(window).on('scroll', function(event) {
    $(window).scrollTop(1);
    console.log('window');
});
