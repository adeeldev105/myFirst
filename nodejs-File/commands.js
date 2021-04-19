////////////post,put,get,patch,delete commands CRUD operations
console.log("Post,Put,Get commands");
const co = require('co');
const fileFS=require('fs');
// var data=fileFS.readFileSync('employees.json'); /////////////in hexa fomat (Buffer values)
// var employee=JSON.parse(data);
// console.log("Employees details : ",employee);

var newdata={
    "name":"Zain",
    "pos":"Developer",
    "Gender":"Male",
    "Age":23,
    "City":"Faisalabad",
    "Country":"Pakistan"
}
let writeData=JSON.stringify(newdata,null,1);
// fileFS.writeFileSync('employees.json',writeData);

fileFS.writeFile('employees11.json', writeData ,(err)=>
{
    if (err) throw err;
    console.log("File has been created...........");
});
console.log("Completion Calllllll....")


// console.log("File name module : ",module.filename);
// console.log("File name ID : ",module.id);
// console.log("File name ID : ",module.exports);

let jsondata=require('./umar.js');
console.log("JSON DATA : ",jsondata);