const express = require("express")
const router = express.Router()
const mainController = require("../controller/mainController")
const multer = require('multer');
const path = require('path')
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


router.get ('/:id', mainController.products)

router.get ('/', mainController.indexProduct)

router.get ('/create', mainController.createProduct)

router.get ('/edit/:id', mainController.getEdit)

router.delete ('/delete/:id', mainController.deleteProduct)

router.post ('/create', upload.single("img-product"), mainController.postcreat)

router.put ('/edit/:id', upload.single("img-product"), mainController.editProduct)


module.exports = router