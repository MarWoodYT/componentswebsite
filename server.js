const express = require('express');
const bodyParser = require('body-parser');


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
app.get('/motherboard', (req, res) => {
    res.render('Motherboard')
})
app.get('/gpu', (req, res) => {
    res.render('gpu')
})
app.get('/case', (req, res) => {
    res.render('Case')
})
app.get('/psu', (req, res) => {
    res.render('PSU')
})
app.get('/hdd', (req, res) => {
    res.render('hdd')
})




app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })

  