var GOOGLE_PLACES_API_KEY = "AIzaSyC6RNICOJecMvTeGM5iV9Snlmyl0i7ID08";
var GOOGLE_PLACES_OUTPUT_FORMAT = "json";

var assert = require('assert');
var PlaceSearch = require('googleplaces/lib/PlaceSearch');

var placeSearch = new PlaceSearch(GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT);
var params = {
    location: [48.746816, 9.101165],
    radius: 15000,
    keyword: "gmbh"
}
placeSearch(params, function (error, response) {

    console.log(response.results.length);

    if (error) throw error;
    assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
});
