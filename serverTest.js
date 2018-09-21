var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.


app.engine("handlebars", exphbs(
    {
        defaultLayout: "main"
        // layoutsDir: path.join(__dirname, 'views/layouts')
    })
);
app.set("view engine", "handlebars");

// app.use(express.static("public"));

app.get("/", function (req, res) {

    res.render("index", { "hbsObject": "hello" });

});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
