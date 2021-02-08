## Node

`sudo npm run start`

## Certbot

`sudo certbot certonly --webroot -w /home/noah/eth-webserver/public/elv-web-data/ -d eth-lerngruppe.ch`

`sudo cp /etc/letsencrypt/live/eth-lerngruppe.ch/fullchain.pem /home/noah/eth-webserver/cert.pem`
`sudo cat /etc/letsencrypt/live/eth-lerngruppe.ch/privkey.pem > /home/noah/eth-webserver/key.pem`