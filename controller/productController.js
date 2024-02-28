const products=require('../constant/data');
const ProductModal=require('../model/ProductModal')


const defaultData=async()=>{
     try{
        ProductModal.insertMany(products)
        console.log('success')
        return('data store sucessfully.')
    }
    catch(err)
    {
        console.log('dafault data',{err})
    }
}

const getProducts=async(req,res)=>{
    try{
        // let products=ProductModal.find();
        // return(req,'product get successfully')
        return new Promise((resolve, reject)=>{
            let products=ProductModal.find().then((data)=>{
                resolve(data)
            });
        })
    }
    catch(err){
        console.log(err)        
    }
}

const getProductsDetail=async(req,res)=>{
    try{
        // let products=ProductModal.find();
        // return(req,'product get successfully')
        const id=req.params.id;
        return new Promise((resolve, reject)=>{
            let products=ProductModal.findOne({'id':id}).then((data)=>{
                console.log(data,'hjijopk')
                resolve(data)
            });
        })
    }
    catch(err){
        console.log(err)        
    }
}


module.exports={defaultData,getProducts,getProductsDetail}
