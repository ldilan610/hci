// JavaScript source code
var express = require("express");
var axios = require("axios");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/translate/:to/:text", (req, res) => {
    console.log("GET");
    console.log(req.params);

    var config = {
        headers: { "Ocp-Apim-Subscription-Key": "b2ca38ca72564d6b959810b9116b991b" }
    };
    axios
        .get(
        "http://api.microsofttranslator.com/V2/Http.svc/Translate?to=" +
        req.params.to +
        "&text=" +
        req.params.text,
        config
        )
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(port);
console.log("Listening on port 8080");

