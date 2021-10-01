const express = require("express");
const app = express();
const path = require("path");
const rutas = require("./routes/index.routes")
const methodOverride = require('method-override')

app.use (express.urlencoded ({extended: false})); 
app.use (express.json())
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(path.join(__dirname, './public')));

app.set ('views', path.join(__dirname, './views'))
app.set ('view engine', 'ejs')

app.use ("/", rutas) //requiero las rutas de el archivos index.routes declarada arriba en la variable rutas //

module.exports = app;

