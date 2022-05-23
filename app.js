//set map options

var mylatlng = {lat: 30.0277, lng:-51.2287};
var mapOptions = {
    center: mylatlng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)