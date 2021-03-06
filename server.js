'use strict'

// Dependencies
const express = require('express');

// HTTP Server
const app = express();

// PORT
const PORT = 3000;

// View Engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', home);

function home (req, res) {
 res.render('index');
}

app.listen(PORT);