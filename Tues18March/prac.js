function RestOperators()
{
    console.log("Values given:\n");
    restParam(10,20,30,40,50);
}
function restParam(a,b,...restArgs)
{
    console.log("a :" + a);
    console.log("b :" + b);
    console.log("Other values : " + restArgs);


}

///////////////spread operators
function SpreadOperators()
{
    var arr1=[10,20,30];
    var arr2=[...arr1,40,50];
    arr1[1]=70;
    // console.log("Array 1 : " + arr1);
    // console.log("Array 2 : " + arr2);
    var obj1={ d:"adeel",a:20};
    var obj2={b:"BSCS",c:"Lahore"};
    // var  obj3={...obj1,...obj2};n
    var obj3=Object.assign(obj1,obj2);
    console.log("Obj1 : ", obj1);
    console.log(obj2);
    console.log(obj3);
}



function DestructureFun()
{
    // var a=10,b=20;
    // console.log("a : " + a );
    // console.log("b : " + b );
    // console.log("After destructuring on numbers (Swapping)\n");
    // [a,b]=[b,a];
    // console.log("a : " + a );
    // console.log("b : " + b );
/////////////////////on arrays
    var array=[1,2,3,4,5];
    // [a,b,c]=array;
    // console.log("a : " + a);
    // console.log("b : " + b);
    // console.log("c : " + c);
    // console.log("d : " + d);
    // console.log("e : " + e)
    [a,...b]=array;
    console.log(a);


    // ////////////on objects
    // var obj1={id:1,name:"Adeel",post:"Developer"};
    // var {id : a, post: c} = obj1;
    // console.log("id : ", a);
    // // console.log("name : ", b);
    // console.log("Post : ", c);


    // const marks = { 
    //     section1: { alpha: 15, beta: 16}, 
    //     section2: { alpha: -31, beta: 19 } 
    //   }; 
    //   const { section2 : { alpha: alpha1, beta: beta1 }} = marks; 
    //   console.log(alpha1, beta1); // 15, 16 

    var users = [
        { user: "", age:4 },
        { user: "Name2", age: 2 },
        { user: "Name3" },
        { user: "Name4", age: 4 }
      ];
      
      for (let { user="Adeel", age = "DEFAULT AGE" } of users) {
      console.log(user, age);
      }
}




/////////arrow functions
// function ArrowFun()
// {
//     console.log("Enjoy yourself ");

//     return "Hello world ";

// }


// var ArrowFun=(name,age)=> `Hello world ${name},${age}`;
// var x=10;
// console.log(x+false);


// console.log(ArrowFun('adeel',24));
// ArrowFun('adeel',24);





///////////////////////arrow functions


color="Balck";

function arrowFun1()
{
    return this.color;
}

arrowFun = (aa)=>{
    console.log(aa)
    return this;
}    
// console.log(arrowFun1());

// console.log(arrowFun(122));
console.log();