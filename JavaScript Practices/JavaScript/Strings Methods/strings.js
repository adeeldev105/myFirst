function myFinds()
{
    var char="My name is adeel";
    var pos=char.search(/ADEEL/i);
    console.log("Position of Adeel is : " + pos );
}
function mySlice()
{
    var numbers=[[1,2,3],[2,3,4],[3,4,5,6,7],[1,2,3,4,5],[2,3,4,5,6]];
    var type=typeof(numbers[0]);
    // var arr=[];
    // arr=numbers.filter(numbers[0]);
    console.log(type);
}