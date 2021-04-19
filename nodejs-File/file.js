// function myFunction1()
// {
//     // var fs=require('fs');
//     // console.log("Hello world !");
//     // console.log("fs");
//     var filesystem = require('fs');
//     // var filesystem = require('/nodejs-File/fs');
//     var data=filesystem.readFileSync("adeel.txt","utf-8");
//     console.log(data);
//     data=data.replace("Adeel","Zain");
//     console.log("Replace 'Adeel ' with 'Zain'");
//     console.log("Pushing replaced data in new file :");
//     filesystem.writeFileSync("zain.txt",data);
//     var data=filesystem.readFileSync("adeel.txt","utf-8"); ///////////readimg old file adeel.txt
//     var data1=filesystem.readFileSync("zain.txt","utf-8"); ///////////readimg new file zain.txt
//     // var data1=filesystem.readFileSync("zain.txt"); 
//     console.log("Old File : ",data);
//     console.log("New File : ",data1);
// //     const fs = require('fs');

// // try {
// //   fs.unlinkSync('/tmp/hello');
// //   console.log('successfully deleted /tmp/hello');
// // } catch (err) {
// //   console.log('Not successfully deleted /tmp/hello');

//   // handle the error
// }
// myFunction1();  



var filefs=require('fs');
function mySync() 
{
    var data;
    data=filefs.readFileSync("zain.txt","utf-8");
    console.log("Inside Sync data : ",data);    
    return data;
}
var prom1 = new Promise((resolve,reject)=>{
        console.log("Reading file asyncronously ....adeel.txt");
            filefs.readFile("adeel.txt","utf-8",(err,data1)=>{
                console.log("Data in file adeel :",data1);
                resolve(data1);
            });
            console.log("Have read the file.....");
    });
var myFunction = async ()=>
{
    console.log("File system started ....!!!");
    console.log("a) Syncronous Call ........");
    var value=mySync();
    console.log("OutSide Sync data retrieved : ",value);
    ///////////////async method
    console.log("b) Asyncronous Call    ....");
    var data2 = await prom1;
    // var data2= await prom1;
    // var data2=myAsync();
    console.log("Successfully retrieved Data 2 outside of async function :",data2);
    
}
myFunction();
// console.log("Ended............!!!");
console.log("Ended............!!!");

// setTimeout(()=>{
//     console.log("Ended............!!!");
// },500);

