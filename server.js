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
    res.render('products/CPU')
})
app.get('/motherboard', (req, res) => {
    res.render('products/Motherboard')
})
app.get('/gpu', (req, res) => {
   var Stock = require ("./appdata/gpu")
    res.render('products/gpu', {
        Stock: Stock.cards
    })
})





app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })

  