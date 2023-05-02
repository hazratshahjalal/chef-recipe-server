const express = require('express');

const chefs = require('./chefs.json')

const app = express();
const port = 5400

// chefs data
app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log('I need more phone from id:', id)
  const chef = chefs.find(chef => chef.id === id) || {};
  res.send(chef)
})

// recipes data


app.listen(port, () => {
  console.log(`server running port ${port}`)
})