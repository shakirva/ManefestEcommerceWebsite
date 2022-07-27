var express = require('express');
const { response } = require('../app');
var router = express.Router();
const productHelpers=require('../helpers/product-helpers');
const userHelpers = require('../helpers/user-helpers');

/* GET home page. */
router.get('/user', function(req, res, next) {

  productHelpers.getAllProducts().then((products)=>{
     console.log(products);

    res.render('user/view-products',{products})


  })
  
  
});
router.get('/login',(req,res)=>{
  res.render('user/login')
});
router.get('/signup',(req,res)=>{
  res.render('user/signup')
});
router.post('/signup',(req,res)=>{
   
  userHelpers.doSignup(req.body).then((response)=>{

   
    console.log(response);
    res.redirect('/login')


  })

})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      res.redirect('/user')
      req.session.loggedIn=true
      req.session.user=response.user
      
    }else{
      res.redirect('/loign')
    
    }

  })
})


module.exports = router;
