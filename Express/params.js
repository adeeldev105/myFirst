const express=require('express');
var app=express();

app.use((req,res,next)=>
{
  console.log("Request : ");
  next();
});

// app.get('/get',(req,res)=>
// {
//   res.send("This is Home page Get method");
// });

// app.post('/post',(req,res)=>
// {
//   res.send("You have called post method ...!!!!");
// });

// app.put('/put',(req,res)=>{
//   res.send("Put request methid called");
// });

// app.delete('/delete',(req,res)=>
// {
//   res.send("Deleted method called ");
// });


app.all('/hello',(req,res)=>
{
  res.send("All methods called ...!!!!!");
})
app.listen(8080);