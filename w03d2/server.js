const express = require('express');
const port = 8878;

const app = express();
app.set('view engine', 'ejs');

//
// DATABASE
//
const recipes = {
  'applepie': {title: 'Apple Pie', ingredients: 'apples', meal: 'breakfast', instructions: 'bake it first'},
  'pancakes': {title: 'Pancakes', ingredients: '', meal: '', instructions: 'dinner'},
  'baklava': {title: 'Baklava', ingredients: 'phyllo pastry, pistachios, cinnamon, honey', meal: 'dessert', instructions: 'Alternate layers of phyllo, nuts, and cinnamon. Cut into squares in-pan and bake. Finish with honey-syrup and let cool.'},
  'brownies': {title: 'Brownies', ingredients: '', meal: '', instructions: ''},
  'fissionchips': {title: 'Fission Chips', ingredients: '', meal: '', instructions: ''},
  'sushi': {title: 'Sushi', ingredients: '', meal: '', instructions: ''},
  'bread': {title: 'B.R.E.A.D.', ingredients: '', meal: '', instructions: ''}
};

//
// MIDDLEWARE
//
app.use(express.urlencoded({extended: false}));

//
// ROUTES
//

//
// BROWSE
//
app.get('/', (req, res) => {
  console.log('recipes DB:', recipes);

  const templateVars = { 
    recipes: recipes,
    username: 'Monkey Fuzz'
  };
  
  res.render('home', templateVars);
});

//
// ADD
//
app.get('/recipes/add', (req, res) => {
  res.render('add');
});

app.post('/recipes/add', (req, res) => {
  console.log('req.body', req.body);

  let slug = req.body.title.replace(/\s+/g, '');
  slug = slug.toLowerCase();

  recipes[slug] = {
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    meal: req.body.meal
  };

  res.redirect('/');
});

//
// READ
//
app.get('/recipes/:slug', (req, res) => {
  const slug = req.params.slug;
  const templateVars = {
    recipe: recipes[slug]
  };
  res.render('read', templateVars);
});

//
// EDIT
//
app.get('/recipes/:slug/edit', (req, res) => {
  const slug = req.params.slug;
  const templateVars = { 
    recipe: recipes[slug],
    slug: slug
  };
  res.render('edit', templateVars);
});

app.post('/recipes/:slug/edit', (req, res) => {
  console.log('req.body', req.body);

  const slug = req.params.slug;

  recipes[slug] = {
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    meal: req.body.meal
  };

  res.redirect('/');
});

//
// DELETE
//
app.get('/recipes/:slug/delete', (req, res) => {
  const slug = req.params.slug;
  delete recipes[slug];
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});
