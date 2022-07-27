var db=require('../config/connection')
var collection=require('../config/collections')
// const bcrypt=require('bcrypt')

module.exports={
    addProduct:(product,callback)=>{
    
        db.get().collection('product').insertOne(product).then((data)=>{
           
        //  console.log(product)
             callback(data.insertedId)
         })
        
    },
    getAllProducts :()=>{
        return new Promise(async(resolve,reject)=>{
        let products= await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
   

}