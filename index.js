const express = require('express');
const app = express();
const fs = require('fs');


const port = 3000;

app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/dva.html")
});

app.get("/borec", (req, res) => {
  res.sendFile(__dirname + "/public/borec.html")
});

app.get("/json", (req, res) => {
  res.json({ username: 'Daniel' })
});

app.get("/folder", (req, res) => {
  let rawData = fs.readFileSync("/public/metadata/metadata.json")
  let parsedData = JSON.parse(rawData)
  res.json(parsedData)
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });