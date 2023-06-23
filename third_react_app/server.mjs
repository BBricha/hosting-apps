import express from 'express';
import path from 'path';
const Port = 4000;
import { fileURLToPath } from 'url';

const app = express(); 
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);




app.use(express.static(path.join(__dirname, '/build')))


app.listen(Port, () => {
    console.log(`running on port ${Port}`);
})