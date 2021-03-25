function addition(total,value)
{
    return total+value;
}
function myFunction()
{
    var nums=[1,2,3,4,5,6,7,8,9];

    var sum=nums.reduce(addition);
    console.log("Sum : ",sum);
}
myFunction();
myFunction();
