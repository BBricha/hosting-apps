const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/build')));

app.listen(4001, () => {
    console.log('listenning on port', 4001);
})