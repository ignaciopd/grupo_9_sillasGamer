const express = require("express");
const app = express();
const path = require("path");
const rutas = require("./routes/index.routes")
const puerto = process.env.PORT || '3000';

app.use (express.urlencoded ({extended: false})); 

app.use(express.static(path.join(__dirname, './public')));

app.set ('views', path.join(__dirname, './views'))
app.set ('view engine', 'ejs')

app.use ("/", rutas) //requiero las rutas de el archivos index.routes declarada arriba en la variable rutas //

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/shopp-cart", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
  });

app.get("/join-us", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
  });

app.get("/sign-in", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
  });
  
app.get("/product-detail", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productDetail.html"));
  });
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/cart.html"));
  });  



app.listen(puerto, () => console.log(`escuchando en el puerto ${puerto}`));

