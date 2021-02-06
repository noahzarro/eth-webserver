const express = require("express");
const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

const app = express();

app.use(express.static('public'));

app.listen(8080);

https.createServer(options, app).listen(8443);