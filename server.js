const express = require('express');
const bodyParser = require('body-parser');


const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/shop', (req, res) => {
   var Stock = require ("./appdata/stock")
    res.render('shop', {
        gpu: Stock.cards,
        cpu: Stock.cpu,
        cases: Stock.cases
    })
})





app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })

  