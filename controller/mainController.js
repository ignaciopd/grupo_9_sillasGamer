const path = require("path");
const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
      },
    
    shoppCart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
      },
    
    joinUs: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/register.html"));
    },

    signIn: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html"));
      },

}

module.exports = controller