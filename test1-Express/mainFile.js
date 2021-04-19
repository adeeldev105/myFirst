const express = require("express");
const mongoose = require("mongoose");
bodyParser  = require('body-parser');
const User = require("./schemas/schema.js");
const Product = require("./schemas/prodSchema.js");

var path = require('path');
const { ObjectID, ObjectId } = require("bson");
const { pid } = require("process");
const { type } = require("os");
const port = 8000;
const app = express();

mongoose.connect("mongodb://localhost:27017/seebiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then((res) => {
        console.log("Connected to Database.")
    }).catch((error) => {
        console.log(error);
    })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/user", async (req, res) => {
    const user = await User.find({});
    // console.log(user);
    res.send(user);
})
app.get("/user/:user_id/products", async (req, res) => {
    var uId = mongoose.Types.ObjectId(req.params.user_id);
    // const myProduct = await Product.populate((uId));
    const userProducts = await Product.find({ merchant_id: uId }).limit(10);
    res.send(userProducts);
});
app.delete("/delete/products/:pslug", async (req, res) => {
    var p_slug=req.params.pslug;
    console.log(p_slug);
    const result = await Product.deleteOne({ slug:p_slug });
    console.log("Resut :", result);
    if(result.deletedCount>0)
    {
        res.send({ value: "Deleted Successfully" });
    }
    else
    {
        res.send({ value: "Deletion value not found........." });
    }
});

// `http://localhost:8000/update/${p_slug}/Name/${p_name}/price/${p_price}`
app.put("/update/:pslug/Name/:pname/price/:pprice", async (req, res) => {
    var p_slug=req.params.pslug;
    var p_name=req.params.pname;
    var p_price=req.params.pprice;
    console.log(p_slug);
    console.log(p_name);
    p_price=Number(p_price);
    console.log((p_price));
    const result = await Product.updateOne(
        {
            slug : p_slug
        },
        {
             title : p_name, price : p_price
        }
    );
    if (result.nModified>0)
    {
        res.send({value : "Successfully updated..........!!!"});
    }
    else
    {
        res.send({value : "Nothing to update..........!!!"});
    }
    console.log("Result : ",result);
});

app.listen(port, () => {
    console.log("Listening to ", port);
});
