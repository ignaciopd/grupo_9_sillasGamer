const puerto = process.env.PORT || '3000';
const app = require('./app')

app.listen(puerto, () => console.log(`escuchando en el puerto ${puerto}`));

