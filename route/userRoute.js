const express = require('express')
const router = express.Router();
const userController=require('../controller/userController')
const productController=require('../controller/productController')
router.post("/", (req, res) => {
    signup();
    return res.status(200).send("hello");
})

router.post("/signup", async (req, res) => {
    let result = await userController.signup(req)
    return res.status(200).json({"message" : result});
})

router.post("/login", async (req,res)=>{
    let result = await userController.login(req)
    console.log({result})
    return res.send(result)
})

router.post("/forget", async (req,res)=>{
    let result = await userController.forget(req)
    console.log({result})
    return res.send(result)
})

router.post("/updatePassword", async (req,res)=>{
    let result = await userController.updatePassword(req)
    console.log({result})
    return res.send(result)
})

router.post("/changePassword", async (req,res)=>{
    let result = await userController.changePassword(req)
    console.log({result})
    return res.send(result)
})

router.get("/product", async (req,res)=>{
    let result = await productController.defaultData(req)
    console.log({result})
    return res.send(result)
})

router.get("/getProducts", async (req,res)=>{
    let result = await productController.getProducts(req)
    console.log({result})
    return res.send(result)
}) 

router.get("/product/:id", async (req,res)=>{
    let result = await productController.getProductsDetail(req)
    console.log({result})
    return res.send(result)
}) 

module.exports = router;