const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const forecast = require('./utils/forecast')
const geocode = require('./utils/coordinates')


app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname,'partials'))
app.use(express.static(path.join(__dirname,'../public')))

app.get('', function(req, res) {
    res.render('index', {
        title: 'weather',
        name: 'John'
    })
})

app.get('/about', function(req, res) {
    res.render('about', {
        title: 'weather',
        name: 'John'
    })
})
app.get('/help', function(req, res) {
    res.render('help', {
        title: 'weather',
        name: 'John'
    })
})

app.get('/weather', function(req,res) {
    if(!req.query.address) {
        return res.send({
            error: 'please provide an address'
        })
    }
    geocode(req.query.address, function(error, response){
        if(error) {
            res.send({
                error: error})
        } 
        forecast(response.latitude, response.longitude, function(error, data){
            if(error) {
                res.send({
                    error: error})
            }
            res.send({
                forecast: data.status,
                location: response.location,
                address: req.query.address

            })
        })
    })
})

app.get('/products', function(req, res){
    if(!req.query.search) {
        return res.send({
            error: 'please provide search term'
        })
    } 
    res.send({
        products:"name",
        age: "25",
        main: "app"
    })
})


app.listen(3000, function() {
    console.log('server is up')
})

