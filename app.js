const express = require("express");
const https = require("https");
const fs = require("fs");
const helmet = require("helmet")

let key;
let cert;

try {
    key = fs.readFileSync("key.pem");
    cert = fs.readFileSync("cert.pem");
} catch {
    key = fs.readFileSync(
        "/etc/letsencrypt/live/eth-lerngruppe.ch/privkey.pem"
    );
    cert = fs.readFileSync(
        "/etc/letsencrypt/live/eth-lerngruppe.ch/fullchain.pem"
    );
}

const app = express();


app.use(helmet.hsts({
    maxAge: 15552000,
}))

app.use(express.static('public/elv-web-data'));

app.listen(8080);

https.createServer({key, cert}, app).listen(8443);