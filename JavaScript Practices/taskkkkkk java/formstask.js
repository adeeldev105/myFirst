function myForms()
{
 
}



function addFields()
{
    var myName=document.getElementById("nameID");
    var myEmail=document.getElementById("emailID");
    var myAge=document.getElementById("ageID");
    var myPhone=document.getElementById("phoneID");
    var table=document.getElementById("table-dec");


    var rowCount=table.rows.length;
    var row=table.insertRow(rowCount);
    row.insertCell(0).innerHTML=myName.value;
    row.insertCell(1).innerHTML=myEmail.value;
    row.insertCell(2).innerHTML=myAge.value;
    row.insertCell(3).innerHTML=myPhone.value;
    // row.insertCell(4).innerHTML=table.children[0].children[1].children[4].innerHTML;
    row.insertCell(4).innerHTML="<button onclick='DeleteCell(this)'> Delete </button>";
    row.insertCell(4).innerHTML="<button onclick='GetIndex(this)'> Update </button>";
   



}
var information={fstname : "",email: "",age:"",phoneNum:""};
// var fstname,email,age,phoneNum;
function Submission()
{
    information.fstname=document.getElementById("fnameID").innerHTML;
    information.email=document.getElementById("emailID").innerHTML;
    information.age=document.getElementById("ageID").innerHTML;
    information.phoneNum=document.getElementById("PhoneID").nodeValue;
    console.log(information.fstname + " With email : " + information.email + " is " + information.age + " years old and cell # " + information.phoneNum);

    // console.log(information);

}
// function AddFields()
// {

// }
var updateIndex=0;
function GetIndex(indexVal)
{
    updateIndex=indexVal;
    console.log("Offoohhh " + updateIndex);
    UpdateCell(indexVal);
}
function UpdateCell(updateIndex)
{
    console.log(updateIndex);
    var index=updateIndex;
    // var i=index.parentNode.parentNode.rowIndex;
    document.getElementById("nameID").value=index.parentNode.parentNode.children[0].innerHTML;
    document.getElementById("emailID").value=index.parentNode.parentNode.children[1].innerHTML;
    document.getElementById("ageID").value=index.parentNode.parentNode.children[2].innerHTML;
    document.getElementById("phoneID").value=index.parentNode.parentNode.children[3].innerHTML;
    // console.log(index.parentNode.parentNode.children[3].innerHTML);
}
function UpdateCell1()
{
    var index=updateIndex;
    var myName=document.getElementById("nameID").value;
    var myEmail=document.getElementById("emailID").value;
    var myAge=document.getElementById("ageID").value;
    var myPhone=document.getElementById("phoneID").value;
    // var table=document.getElementById("table-dec");


    index.parentNode.parentNode.children[0].innerHTML=myName;
    index.parentNode.parentNode.children[1].innerHTML=myEmail;
    index.parentNode.parentNode.children[2].innerHTML=myAge;
    index.parentNode.parentNode.children[3].innerHTML=myPhone;
    // row.insertCell(4).innerHTML=table.children[0].children[1].children[4].innerHTML;
    // index.parentNode.parentNode.children[4].innerHTML="<button onclick='DeleteCell(this)'> Delete </button>";
    // index.parentNode.parentNode.children[4].innerHTML="<button onclick='UpdateCell(this)'> Update </button>";
   

}
function DeleteCell(index)
{
    var i = index.parentNode.parentNode.rowIndex;
    console.log(i);
    document.getElementById("table-dec").deleteRow(i);
}
