// function myFunction() 
// {
    
//     document.getElementById("change").innerHTML = "New Paragraph changed";
    
//     // window.alert("Dont do this again");
//     console.log(5+7);
// }   
// function myFunction1()
// {
//     document.getElementById("date").innerHTML = this.innerHTML=Date();
// }  
// function myAdeel()
// {
//     document.getElementById("adeel").innerHTML="My name is adeel with age of 24 years";
//     window.alert("offoohhhh");
//     let a=11;


// }
// document.write(5+2+3);
// var a=10;
// function checker()
// {
//     var a=15;

//     console.log(a);
// }

// console.log(a);
// var array3 = [];
// var array1=[1,2,3,4,5];
// var array2=[6,7,8,9,10, 78, 21];
// array3[0] = array1[0]+array2[0];
// var j=0;
// for (let i=0;i<5;i++)
// {
//     j=i;
//     array3.push(array1[i]+array2[i]);
// }

// console.log(array3);
// var a=10;
// var b=20;
// var z=a+b;
// var x=b-a;
// var y=b*a;
// var c=b/a;
// console.log("Addition is = " +  "  " + z);
// console.log("Subtraction is = " +  "  " + x);
// console.log("Mutiplication is = " +  "  " + y);
// console.log("division is = " +  "  " + c);

// var a=5;
// var b=a**2;
// console.log("Square of " + a + " is " + b);


// var text="my name is ";
// text +="adeel";
// console.log(text);
// var a=11;
// if (a%2==0)
// {
//     console.log(a+" is even \n");
// }
// else
// {
//     console.log(a +" is odd\n");
// }



function myStrings()
{
    var person=
    {
        firstname : "Adeel",
        lastname : "Zafar",
        age:23,
        eyeColor:"blue"
    };
    document.getElementById("strings").innerHTML=person.firstname + " " + person.lastname + " is " + person.age + " years old "; 
    // console.log(f);
}


function myTemperature()
{
    var txt = "";
    var numbers = [45, 4, 9, 16, 25];
    numbers.forEach(myFunction);
    
    function myFunction(value) {
      txt = txt + value + "\n";
      
    }
    console.log(txt);
}