const express = require("express")
const router= express.Router()
const mainController = require("../controller/mainController")
const multer = require('multer');
const path = require('path')


router.get ("/", mainController.home);

router.get("/shopp-cart", mainController.shoppCart);  

router.get("/join-us", mainController.joinUs);

router.get("/sign-in", mainController.signIn);

router.get ('/create-product', mainController.createProduct)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/img'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

router.post ('/create', upload.single("img-product"), mainController.postcreat)

router.get ('/product-detail/:id', mainController.products)
  

module.exports = router