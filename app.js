const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/router");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

const listener = app.listen(3000, () => {
  console.log("Express web server port " + listener.address().port);
});
