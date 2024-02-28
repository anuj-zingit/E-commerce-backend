const mongoose = require('mongoose');
const productSchema=mongoose.Schema(
    {
        id:String,
        url: String,
        detailUrl: String,
        title: Object,
        price:Object,
        quantity: Number,
        description: String,
        discount: String,
        tagline:String
    }
)

const Products=mongoose.model('Products',productSchema);

module.exports=Products;
