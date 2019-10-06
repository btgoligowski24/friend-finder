const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes.js");

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});