const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080;

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

app.get('/elements',  (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
});

app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
