const app = require('express')();
const port = 3000;

app.get("/", (req, res) => {
    res.json("Hello")
    //res.sendFile(__dirname + "/public/index.html")
});

app.get("/about", (req, res) => {
    res.sendFile("/api/about.html")
});

app.get("/index", (req, res) => {
    res.sendFile("/api/index.html")
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
  
  module.exports = app;