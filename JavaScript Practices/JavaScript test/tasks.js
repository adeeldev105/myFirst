/////////////////task 1
function task1()
{
    var data1=[0,1,2,3];
    var data2={ id: 1, name: "Test", isActive: false };
    var ans1=Array.isArray(data1);
    var ans2=Array.isArray(data2);
    console.log("Data 1 : " + data1);
    console.log("Check input for data 1 an an array is : " + ans1);
    console.log("Data 1 : " + data2);
    console.log("Check input for data 2 an an array is : " + ans2);
}
////////////////////task 2
function task2()
{
    var data=[[1,2,3,4],2,3,4,[1,2,3]];
    console.log("Array is : ",data);
    console.log("First element of array is : ", data[0]);
}
////////////////////task 3
function task3()
{
    var array=["Red", "Green", "White", "Black"];
    console.log("Joining with space : ",array.join(" "));
    console.log("Joining with , : ",array.join(","));
    console.log("Joining with + : ",array.join("+"));
}
////////////////////////task 4
function task4()
{
    var testArray = [
        {id: 7, name: "Test1", joiningDate: "2021-03-16T01:23:30.487Z"},
        {id: 3, name: "Test2", joiningDate: "2021-03-01T09:55:30.487Z"},
        {id: 2, name: "Test31", joiningDate: "2021-01-15T02:15:30.487Z"},
        {id: 5, name: "Test81", joiningDate: "2021-06-14T19:51:30.487Z"},
        {id: 6, name: "Test18", joiningDate: "2021-04-16T12:43:30.487Z"},
        {id: 9, name: "Test14", joiningDate: "2021-03-16T12:50:30.487Z"},
        {id: 8, name: "Test21", joiningDate: "2021-02-26T19:50:30.487Z"},
        {id: 1, name: "Test11", joiningDate: "2021-01-09T19:50:30.487Z"},
    ];
    for (var x in testArray) 
    {
        testArray[x].joiningDate=Date.parse(testArray[x].joiningDate);
    }
    testArray.sort((a,b)=> a.joiningDate -b.joiningDate);
    console.log(testArray);

}
/////////////////task 5
function task5()
{
    var array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    console.log("Output : ");
    for (let i=0;i<array.length;i++)
    {
        for (let j=0;j<array[0].length;j++)
        {
            console.log(array[i][j]);
        }
    }
}


///////////////////task 6
function task6()
{
    var string=document.getElementById("inputStr").value;
    console.log("String : ",string);
    var subString=string.split("");;
    console.log(subString);

}
/////////////////task 7
function task7()
{
    var obj1 = {id: 4, name: "Test1", joiningDate: "2021-01-09T19:50:30.487Z"}
    var obj2={};
    obj2=Object.assign(obj1,obj2);
    console.log(obj2);
}
///////////////task 8
function task8()
{
   var array = [1, 2, 3, 4, 5, 6];
   var sum=0;
   var product=1;
   sum=array.reduce(CalculateSum);
   function CalculateSum(total,value,index,array)
   {
       return total+value;
   }
   product=array.reduce(CalculateProduct);
   function CalculateProduct(total,value,index,array)
   {
       return total*value;
   }
   console.log("Array : ",array);
   console.log("Sum : ",sum);
   console.log("Product : ",product);
}
function task9()
{
    var array1 = [1,0,2,3,4,1,2,3,4,5,6,7];
    var array2 = [3,5,6,7,8,13,14];
    var array3=[];
    var finalSize=Math.max(array1.length,array2.length);
    var shortSize=Math.min(array2.length,array1.length);
    var counter=0;
   for(let i=0;i<shortSize;i++)
   {
       array3[i]=array1[i]+array2[i];
       counter++;
   }
   if (array1.length>shortSize)
   {
        for (let i=counter;i<finalSize;i++)
        {
            array3[i]=array1[i];
            counter++;
        }
   }
   if (array2.length>shortSize)
   {
       for (let i=counter;i<finalSize;i++)
        {
            array3[i]=array2[i];
            counter++;
        }
   }
   console.log("Final OutPut : " ,array3);
}
    array1=[1,2,3];
    array2=[100,2,1,10];
    var NewArray=[];
    for (var i in array1)
    {
        if (!array2.includes(array1[i]))
        {
            NewArray.push(array1[i]);
        }
    }
    for (var i in array2)
    {
        if (!array1.includes(array2[i]))
        {
            NewArray.push(array2[i]);
        }
    }
    console.log("Difference : ",NewArray);
}
