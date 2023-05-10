//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/CHCalc", function(req, res) {
  res.sendFile(__dirname + "/HeightCalculator.html")
});
app.post("/", function(req, res){


  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);


  var height = 3*(num2 / (Math.PI * num1 * num1));

// sends the results back to the web page as string
   res.send("The height of the right circular cone is " + height.toFixed(2));
})
//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
