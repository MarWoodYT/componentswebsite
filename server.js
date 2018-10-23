const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

var path = require('path');



const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/cpu', (req, res) => {
    res.render('CPU')
})



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })

  