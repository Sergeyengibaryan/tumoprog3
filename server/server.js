var express = require("express");

var app = express();

app.use(express.static("../client"));

app.get("/", function (req, res) {

    res.redirect("index.html");

});

app.listen(3000, function () {

    console.log("Example is running on port 3000");

});


var Predator = require("./my_modules/Predator")
var Kaytak = require("./my_modules/Kaytak")
var grasseater = require("./my_modules/grasseater")
var grass1 = require(".my_modules/grass1")
var Chariq = require("./my_modules/Chariq")
var Bariq = require("./my_modules/Bariq")
var AllEater = require("./my_modules/AllEater")

var matrix = []
function generatematrix(){
  
}
generatematrix()
console.log(matrix)