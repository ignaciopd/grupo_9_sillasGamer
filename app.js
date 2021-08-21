const express = require("express");
const app = express();
const path = require("path");
const puerto = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, './public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});

app.get("/shopp-cart", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/index.html"));
  });

app.get("/join-us", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/index.html"));
  });

app.get("/sign-in", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/index.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/index.html"));
  });  
app.listen(puerto, () => console.log(`escuchando en el puerto ${puerto}`));