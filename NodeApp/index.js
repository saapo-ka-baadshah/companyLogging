var assert = require('assert');
var fs = require('fs');
var PlaceSearch = require('googleplaces/lib/PlaceSearch');
var json2xls = require('json2xls');

var placeSearch = new PlaceSearch("YourAPIKey", "json");
var outputFilePath = "";

var params = {};

process.argv.forEach((val, i, array) => {
  if(i > 1){
    var arr = val.split('=');
    if(arr.length == 2){
      if(String(arr[0]) == "output" ){
        outputFilePath = String(arr[1]);
      }
      else{
        params[String(arr[0])] = arr[1];
      }
      
    }
    else {
      console.log("Pass correct arguments\n", arr, i);
    }
  }
});

placeSearch(params, function (error, response) {

    var xls = json2xls(response.results); 
    fs.writeFileSync(outputFilePath+'.xlsx', xls, 'binary');
    console.log("File saved to : ", outputFilePath+".xls");
    if (error) throw error;
    assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
});