const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, '/dist/depo')));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/depo/index.html');
});
app.listen(port);
