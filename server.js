const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
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
app.get('/gpu', (req, res) => {
    res.render('add/gpu')
})
app.get('/cpu', (req, res) => {
    res.render('add/cpu')
})
app.get('/cases', (req, res) => {
    res.render('add/cases')
})


app.get('/edit', (req, res) => {
    res.render('edit')
})
app.get('/editgpu', (req, res) => {
    res.render('edit/editgpu')
})

app.post('/add/gpu', (req, res) => {
    var Stock = require("./appdata/stock")
    Stock.cards.push({
        Amount: req.body.Amount,
        Name: req.body.Name,
        Price: req.body.Price,
        ID: req.body.ID
    })
    fs.writeFile(
        "appdata/stock.json",
        JSON.stringify(Stock),
    )
    res.render('add/gpu')
})

app.post('/add/cpu', (req, res) => {
    var Stock = require("./appdata/stock")
    Stock.cpu.push({
        Amount: req.body.Amount,
        Name: req.body.Name,
        Price: req.body.Price,
        ID: req.body.ID
    })
    fs.writeFile(
        "appdata/stock.json",
        JSON.stringify(Stock),
    )
    res.render('add/cpu')
})


app.post('/add/cases', (req, res) => {
    var Stock = require("./appdata/stock")
    Stock.cases.push({
        Amount: req.body.Amount,
        Name: req.body.Name,
        Price: req.body.Price,
        ID: req.body.ID
    })
    fs.writeFile(
        "appdata/stock.json",
        JSON.stringify(Stock),
    )
    res.render('add/cases')
})




app.post('/edit/gpu', (req, res) => {
    var Stock = require("./appdata/stock")
    var i = Stock.cards.findIndex(obj => obj.id == req.body.id)
    
    
    Stock.cards[i] = {
        Amount: req.body.Amount,
        Name: req.body.Name,
        Price: req.body.Price,
        ID: req.body.ID
    }
    fs.writeFile(
        "appdata/stock.json",
        JSON.stringify(Stock),
    )
    res.redirect('/')
})


app.get('/shop', (req, res) => {
    var Stock = require("./appdata/stock")
    res.render('shop', {
        gpu: Stock.cards,
        cpu: Stock.cpu,
        cases: Stock.cases
    })
})



app.listen(3000, function () {
    console.log('HOSTING_ON_PORT_3000')
})