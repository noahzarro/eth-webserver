const express = require("express");
const helmet = require("helmet")

const app = express();

app.use(helmet.hsts({
    maxAge: 15552000,
}))

app.use(express.static('public/elv-web-data'));

app.listen(8080);
