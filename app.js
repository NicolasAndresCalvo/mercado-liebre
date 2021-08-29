const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express()
const port = 3000
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.use(morgan('tiny'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));

app.listen(port, () => console.log(`Example app listening on port port!`));