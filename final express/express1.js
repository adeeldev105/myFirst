// const { json } = require('body-parser');
const express=require('express');
var app=express();
const fs=require('fs');
var myEmployees=require('./data');
// console.log(myEmployees);
// console.log(typeof(myEmployees[0].age));
console.log("My Programmmmmm...!!!!!!!!!!!!!!!!");
// var reqAge=24;
// myEmployees.forEach(FindEmployee);
// for (var index in myEmployees) 
// {
//     if (parseInt(myEmployees[index].age)==myAge)
//     {
//         console.log(myEmployees[index]);
//     }
// }
app.get('/get/:age',(req,res)=>
{
    var reqAGE=req.params.age;
    reqAGE=parseInt(reqAGE);
    var userObject={};
    for (let index of myEmployees)
    {
        if (reqAGE==parseInt(index.age))
        {
            // myIndex=index;
            // res.end("Result of " + reqAGE + " is => ")
            console.log(typeof(index));
           userObject=index;
           break;
        }
    }
    console.log(userObject);
    res.send(userObject);
    // res.end();

    
});

// app.post('/post',(req,res)=>
// {
//     let data1=fs.readFileSync('data.json','utf-8');
//     res.send("Data posted on file"+data1);
//     console.log(data1);
//     fs.writeFileSync('newData.json',data1);
// });
// app.post('*',(req,res)=>
// {
//   res.send("Invalid post method called ...!!!!");

// });
app.put('/put',(req,res)=>{

  res.send("Put request method called");
});
app.delete('/delete/:name',(req,res)=>
{
    var nameGet=req.params.name;
    // console.log(nameGet);
    let data1=fs.readFileSync('data.json','utf-8');
    JSON.stringify(data1);
    var record=req.body;
    console.log("Age : ",record);
    res.send('Deleted');
});

app.listen(8085);