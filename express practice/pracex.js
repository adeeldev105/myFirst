// var express=require('express');
// const { compile } = require('proxy-addr');
// var app=express();
// var port=8030;


// app.get('/',(req,res)=>
// {
//     res.end('server created by expresssss....!!!');
// })
// app.listen(port,()=>
// {
//     console.log("Port is listenning at value ",port);
// })

var students={
    name:'adeel',
    age:24,
    city:'Lahore',
    country:'Pakistan'
};
const stuSTR=JSON.stringify(students,null,'******');
console.log(stuSTR);