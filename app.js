const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home', {
    name : 'Daniel Restrepo',
    title: 'My First WebServer With Node'
  });
});

app.get('/generic',  (req, res) => {
  res.render('generic', {
    name : 'Daniel Restrepo',
    title: 'My First WebServer With Node'
  });
});

app.get('/elements',  (req, res) => {
  res.render('elements', {
    name : 'Daniel Restrepo',
    title: 'My First WebServer With Node'
  });
});

app.get('*',  (req, res) => {
  res.render('404');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
