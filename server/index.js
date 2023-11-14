const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/dogs", () => {
    res.send("Maybe one or two or all the dogs?");
})

app.listen(3001, () => {
    console.log("connected on port 3001");
});