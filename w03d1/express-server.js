const express = require('express');
const path = require('path');
const port = 3001;

const app = express();
app.set('view engine', 'ejs'); // sets the Template Engine

//
// MIDDLEWARE
//
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(`route: ${req.method} ${req.url}`);
  next();
});

//
// ROUTES
//
app.get('/', (req, res) => {
//  console.log('req', req);
  console.log('homepage');

  const templateVars = {
    name: 'Westerners!'
  };

  res.render('index', templateVars); // this will find 'views/index.ejs'
});

app.get('/monkeyfuzz', (req, res) => {
  //  console.log('req', req);
  console.log('monkeyfuzz');
  res.send('Monkey Fuzz! <a href="/">Home</a>');
});

app.get('*', (req, res) => {
  console.log('404');
  res.status(404).render('404'); // this will find 'views/404.ejs'
});

//
// LISTEN
//

app.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});
