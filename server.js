const express = require('express');
const bodyParser = require('body-parser');
const fs= require ('fs');


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
app.get('/addgpu', (req, res) => {
    res.render('addgpu')
})

app.post('/addgpu',(req,res) =>{
    var Stock = require ("./appdata/stock")
    Stock.cards.push (
        {
            Amount:req.body.Amount,
            Name:req.body.Name,
            Price:req.body.Price,
            ID:req.body.ID
        }
    )
    fs.writeFile(
        "appdata/stock.json",
        JSON.stringify(Stock),
        )
    res.render('addgpu')
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

  