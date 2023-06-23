import express from 'express';
import path from 'path';
const Port = 4001;

const app = express(); 
const buildPath = path.resolve(process.cwd(), 'build');


app.use(express.static(buildPath));





app.listen(Port, () => {
    console.log(`running on port ${Port}`);
})