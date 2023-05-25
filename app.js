const express = require('express');

const app = express();
const {render} = require('ejs');
const _ = require('lodash');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('style'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use( (req,res, next) => {
    console.log('new request made');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();
})
app.listen(4000, () => {
    console.log('app listening on port 4000')
});


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/Lexoduz', (req, res) => {
    res.render('lexoduz')
});

app.get('/profile', (req, res) => {
    res.render('profile')
});

app.get('/contact', (req, res) => {
    res.render('contact')
})




