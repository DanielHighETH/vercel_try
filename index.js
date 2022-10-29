const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/dva.html")
});

app.get("/borec", (req, res) => {
  res.sendFile(__dirname + "/public/borec.html")
});

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
  

  module.exports = app