var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8888;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controller/routes.js");
app.use("/",routes);
// var port = 3000;
app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
});
