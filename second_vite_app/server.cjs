const express = require('express');
const path = require('path');
const PORT = 4000;

const app = express();
 
app.use(express.static(path.join(__dirname, "/dist")));


app.listen(PORT, () => {
    console.log("running on port", PORT)
})
