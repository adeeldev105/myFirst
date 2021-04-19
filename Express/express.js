// var fs=require('fs');
// var http=require('http');
// var express=require('express');
// var app=express();
// // var https=require('https');

// var port=8020;
// var localHost=('127.0.0.2');

// var data=fs.readFileSync('myFile.txt','utf8');
// console.log("Data 1: ",data);
// var data2=fs.readFileSync('myFile2.txt','utf8');
// console.log("Data 2: ",data2);

// const myServer =http.createServer((req,res)=>
// {
//     res.end(data);
// })


// myServer.listen(port,localHost,()=>{
//     console.log("Server is listenning at port ",port);
// })



// const express=require('express');
// const app=express();

// function logInfo(req,res,next){
//     console.log("Hello from the function of middlewares....!!");
//     next();
// }

// function addData(req,res,next)
// {
//     var person={
//         name :"adeel",
//         age :24
//     };
//     req.person=person;
//     next();
// }

// app.use(logInfo);
// app.use(addData); 

// app.get('/',function(req,res){
//     res.send("Welcome to the indedx page of middleware function  ... ");
// });

// app.get('/person',function(req,res){
//     res.send('Name : ' + req.person.name + ', with age : ' + req.person.age);
// });
// app.listen(8080);


const express=require('express');
var app=express();

function logInfo(req,res,next)
{
    console.log("This is our middleware function call .....");
    next();
}
function addData(req,res,next)
{
    var employee={
        name :"Adeel Zafar",
        position:"Developer"
    }
    req.employee=employee;
    next();
}
function profiles(req,res,next)
{
    var names=['adeel',"zain","ali","sohail"];
    req.names=names[req.params.id];
    next();
}
////////////////objects values

app.use(logInfo); ////////////////////for 1st info log
app.use(addData); ///////////////for add Dat
app.use('/profiles/:id',profiles) /////////////by array get method


app.get('/',function(req,res)
{
    res.send("Welcome to the index page of middleware function .....!!!");
});


app.get('/employee',function(req,res)
{
    res.send(req.employee.name + " is " + req.employee.position  + " at MateebTech,Lahore");
});
app.get('/profiles/:id',function(req,res)
{
    res.send("Name : " + req.names);
});

var books=[
    {
        bid:11,
        bName:"Fault in our stars"
    },
    {
        bid:12,
        bName:"Rich dad,poor dad"
    },
    {
        bid:13,
        bName:"intersteller"
    }
];
app.get('/books/:id',function(req,res)
{
    // res.send("Book name : " + req.bName + " corresponding to ID : " + req.bid);
    // res.send("Book Name : "+ req.booksObj.bName);
    // console.log(req.params.id);
    // next();
    var getID=req.params.id;
    // console.log(getID);
    // console.log(req.bName);
    if (getID==books.bid)
    {
        res.end('Book : ' + req.bName + ' against this ID ' + req.params.id + ' is available ');
    }
    else
    {
        res.end('ID didnot match with any Book');
    }
})
app.listen(8080);
