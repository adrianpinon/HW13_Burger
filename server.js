const express = require('express');

const PORT = process.env.PORT || 8080; 
const app = express();

app.use(express.static("..."));

const exphbs = require("expres-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("...")






app.listen(PORT, function() {
    console.log("server is listening on http://localhost:" + PORT);
});