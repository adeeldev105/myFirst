

const  mongoose  = require("mongoose");
const { schema } = require("./schema");
const productSchema=new mongoose.Schema(
    {
        _id:{
            type:String
        },
        title:{
            type:String
        },
        tierprice:{
            type: Number
        },
        merchant_id:{
            type : mongoose.Types.ObjectId,
        },
        product_images:{
            type:String,
            isTrashed: Boolean,
            isfeature:Boolean
        },
        users:[{type : mongoose.Schema.Types.ObjectId, ref : 'users'}]
    }

);
module.exports=mongoose.model("products",productSchema);
