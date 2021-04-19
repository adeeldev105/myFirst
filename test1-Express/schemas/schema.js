const  mongoose  = require("mongoose");
const userSchema=new mongoose.Schema({
    id_ :{
        type:String
    },
    phone:{
        type:Number
    },
    merchant_id :{
        type : Number
    },
    username: {
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    api_key:{
        type:String
    },
    unique_url:{
        type:String
    },
    address:{
        country:String,
        city:String,
        zip:Number,
        street:String,
        state:String
    },
    products : [{type : mongoose.Schema.Types.ObjectId,ref:'products'}]
});



module.exports=mongoose.model("users",userSchema);
