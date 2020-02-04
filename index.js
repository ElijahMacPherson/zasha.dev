const express = require('express');
const app = express();
const https = require('https');
const http = require('http');
const fs = require('fs');

app.use(express.static('public'));
/*https.createServer({
  key: fs.readFileSync('ssl/zasha.dev.key', 'utf-8'),
  cert: fs.readFileSync('ssl/www_zasha_dev.crt', 'utf-8')
}, app)
.listen(3000);*/

http.createServer(app).listen(3000);
