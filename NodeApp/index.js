require('dotenv').config();
const httpObj = require('axios');

var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
var center = "location="+process.env.CENTER;
var radius = "radius="+process.env.RADIUS;
var keyword= "keyword="+process.env.KEYWORD;
var APIkey= "key="+process.env.APIKey;
console.log(url+'&'+center+'&'+radius+'&'+keyword+'&'+APIkey);

httpObj.get(url+'&'+center+'&'+radius+'&'+keyword+'&'+APIkey).then((resp) => {
    console.log(resp.data);
  }).catch((err) => {
    console.log("Error: " + err.message);
  });
