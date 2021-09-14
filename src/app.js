const express = require("express");
const app = express();
const path = require("path");
const rutas = require("./routes/index.routes")


app.use (express.urlencoded ({extended: false})); 

app.use(express.static(path.join(__dirname, './public')));

app.set ('views', path.join(__dirname, './views'))
app.set ('view engine', 'ejs')

app.use ("/", rutas) //requiero las rutas de el archivos index.routes declarada arriba en la variable rutas //

module.exports = app;

