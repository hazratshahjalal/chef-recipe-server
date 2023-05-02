const express = require('express');

const app = express();
const port = 5400

app.get("/", (req, res) => {
  res.send("hi there")
})

app.listen(port, () => {
  console.log(`server running port ${port}`)
})