var express = require('express');
// const { render } = require('../app');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers')
 var productHelper= require('../helpers/product-helpers')
 const userHelpers = require('../helpers/user-helpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
     console.log(products);

    res.render('admin/view-products',{admin:true,products})


  })
  
  

});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
}
 
)
router.post('/add-product', function(req,res){
  
  productHelpers.addProduct(req.body,(id)=>{
    console.log('jinn');
    console.log(req.busboy
      )
    console.log(req.body)

    let image=req.files.image
    
    image.mv("./public/images/" +id+ '.jpg', (err)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
        console.log('err');
      }
    })
      
  })


}
)

module.exports = router;
