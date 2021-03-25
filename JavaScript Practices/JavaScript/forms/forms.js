function myForms()
{
    var fname,lname,uname,gmail,password,rePassword;
    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    uname=document.getElementById("uname").value;
    gmail=document.getElementById("gmail").value;
    password=document.getElementById("passName").value;
    rePassword=document.getElementById("rpassName").value;
    console.log(fname);
    console.log(lname);
    console.log(uname);
    /////////validation for first name
    var fnameRE=/^[a-z A-Z]{1,25}$/;
    console.log((fnameRE.test(fname)));
    //////////validation for last name
    var lnameRE=/^[a-z A-Z]{1,25}$/;
    console.log((lnameRE.test(lname)));
    ///////////validation for user name
    // var userNameRE=/^([A-Za-z)][_][0-9]){7,13}$/;
    var userNameRE=/^[a-zA-Z]{3,}[_0-9]{3,}/;
    console.log((userNameRE.test(uname)));
    ///////////validation for email
    var GmailRE=/^[a-zA-Z0-9\._]{4,15}@[a-zA-Z]{4,}\.[a-zA-Z]{3,}$/;
    console.log((GmailRE.test(gmail)));
    // var passRE=/^([a-z]{1,3}[A-Z]{1,3}[!@#$%^&* ]{2,5}[0-9]{1,8}){8,16}$/;
    var passRE=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[1-9])(?=.*[!@#$%^&*()_=+])[a-zA-Z0-9!@#$%^&*()_+=]{8,24}/;
    console.log(passRE.test(password));
    var NewPassRE=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[1-9])(?=.*[!@#$%^&*()_=+])[a-zA-Z0-9!@#$%^&*()_+=]{8,24}/;
    console.log(NewPassRE.test(rePassword));
    var forPassword=true;
    // if (length.rePassword != length.password)
    // {
    //     forPassword=false;
    // }
    // else
    // {
    //     for (let i=0;i<length.password;i++)
    //     {
    //         if (password[i]!=rePassword[i])
    //         {
    //             forPassword=false;
    //         }
    //     }
    // }
    // var oldPass=JSON.stringify(password);
    // console.log(oldPass.length);
    // var RePass=JSON.stringify(rePassword);
    // console.log(rePassword.length);
    // console.log(oldPass.length);

    if((password != rePassword))
    {
        forPassword=false;
    }
    if (forPassword==false)
    {
        console.log("Please match your password\n");
    }
    else
    {
        console.log("Thank you")
    }
}