const express = require('express');

const chefs = require('./chefs.json')
const recipes = require('./recipes.json')

const app = express();
const port = 5400

// chefs data
app.get('/', (req, res) => {
  res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log('I need more phone from id:', id)
  const chef = chefs.find(chef => chef.id === id) || {};
  res.send(chef)
})

// recipes data
app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log('I need more phone from id:', id)
  const recipe = recipes.find(recipe => recipe.id === id) || {};
  res.send(recipe)
})



app.listen(port, () => {
  console.log(`server running port ${port}`)
})