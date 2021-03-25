function myTask1()
{
    console.log("Task 1 solution \n");
    var a,b;
    a=10;
    b=20;
    console.log("a = " + a);
    console.log("b = " + b);
    ////////////swapingggggg
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("After swaping both values ");
    console.log("a = " + a);
    console.log("b = " + b);
}

////////////////task2 
function myTask2()
{
    console.log("Task 2 solution \n");
    var array=[1,2,3,4,5,7];
    console.log("Actual array is : " + array);
    var size=array.length;
    var i=0;
    var j=size-1;
    
    console.log(size);
    if (size%2==0)
    {
        while(j>(size/2 -1 ))
        {
            array[i]=array[i]+array[j];
            array[j]=array[i]-array[j];
            array[i]=array[i]-array[j];
            j--;
            i++;
        }
    }
    else
    {
        while(j>(size/2))
        {
            array[i]=array[i]+array[j];
            array[j]=array[i]-array[j];
            array[i]=array[i]-array[j];
            j--;
            i++;
        }
    }
    console.log("New reversed array is : " + array);
}


function myTask3()
{
    console.log("Task 3 solution \n");
    var array1=[1,4,6];
    var array2=[2,3,5];
    var array3=[];
    var size=array1.length + array2.length;
//////////////////////////this is algorithm   
    // var i=0;
    // var j=0;
    // var k=0;
    // while (i<array1.length && j<array2.length)
    // {
    //     if (array1[i]<array2[j])
    //     {
    //         array3.push(array1[i]);
    //         i++;
    //     }
    //     else if (array1[i]>array2[j])
    //     {
    //         array3.push(array2[j]);
    //         j++;
    //     }
    //     else
    //     {
    //         array3.push(array1[i]);
    //         i++;
    //         j++;
    //     }
    // }
    array3=array1.concat(array2);
    array3.sort(function(a,b)
    {
        return a-b; 
    })
    console.log("Merge Sorted array is : " + array3);
}
function myTask4()
{
    console.log("Task 4 solution \n");
    var person=[
    {id: 1, name: 'Ali', dob: '02/02/1990'},
    {id: 1, name: 'Ali', dob: '02/02/1990'}, 
    {id: 2, name: 'Usman', dob: '02/01/1991'}, 
    {id: 3, name: 'Saad', dob: '12/23/1990'}];


    console.log("Old list is : ");
    console.log(person);
    person[0].isActive="True";
    console.log("New list is : ");
    console.log(person);


}

//////////////////task 5 solutions
function myTask5()
{
    console.log("Task 5 solution \n");
    // var numbers=Array(50);
    var numbers=Array.apply(null,{length:50});
    for (var i=0;i<numbers.length;i++)
    {
        numbers[i]=i+1;
    }
    console.log("Actual array : " + numbers);
    var even=[];
    var odd=[];
    // var a=0,b=0;
    // for (let i=0;i<numbers.length;i++)
    // {
    //     if (numbers[i]%2==0)
    //     {
    //         even[a]=numbers[i];
    //         a++;
    //     }
    //     else
    //     {
    //         odd[b]=numbers[i];
    //         b++;
    //     }
    // }

    numbers.forEach(a=> { a%2==0 ? even.unshift(a) : odd.unshift(a)
        
    });
    even.reverse();
    odd.reverse();
    console.log("Even numbers : " + even);
    console.log("Odd numbers : " + odd);
}

///////////////task 6 solution
function myTask6()
{
    console.log("Task 6 solution \n");
    var numbers=Array.apply(null,{length:50});
    for (let i=0;i<numbers.length;i++)
    {
        numbers[i]=i+1;
    }
    var sum=numbers.reduce(SumFunction);
    function SumFunction(total,value)
    {
        return total+value;
    }
    console.log("Sum of first 50 numbers is : " + sum);
}


///////////////////task 07
function myTask7()
{
    var numbers=[[1,2,3],[2,3,4],[3,4,5,6,7],[1,2,3,4,5],[2,3,4,5,6]];
    // console.log(numbers[0]+"  "+numbers[3]);
    var text="";
    for (let i=0;i<numbers.length;i++)
    {
        text += "Array " + (i+1) + " : " + numbers[i] + "\n"
    }

    var common=[];
    var duplicate=[];
    common=numbers[0];
    for (let i=0;i<common.length;i++)
    {
        for (let j=1;j<numbers[j];j++)
        {

        }
    }
    // console.log(text);
    // var first=[];
    // var second=[];
    // var Duplicates=[];  
    // var common=[];
    // console.log("Duplicates : ")
    // for (let i=0;i<numbers.length;i++)
    // {
    //     // common=numbers[i];
    //     first=numbers[i];
    //     second=numbers[i+1];
    //     for (let j=0;j<first.length;j++)
    //     {
    //         for (let k=0;k<second.length;k++)
    //         {
    //             if (first[j]==second[k] && common)
    //         }
    //     }
    //     // for (let j=0;j<second.length;j++)
        // {
        //     if (first[i]==second[j])
        //     {
        //         Duplicates.push(first[i]);
        //         //console.log(first[i]);
        //     }
        // }
    console.log(Duplicates);
}

function myTask8()
{
    var array=[
        {id:1,email:{email:'br@gmail.com,tj@gmail.com,b@gmail.com, zl@gmail.com'}},
        {id:2,email:{email:'by@gmail.com,tj@gmail.com,b@gmail.com, zi@gmail.com'}},
        {id:3,email:{email:'bs@gmail.com,tt@gmail.com,by@gmail.com, zg@gmail.com'}},
        {id:4,email:{email:'bd@gmail.com,tr@gmail.com,b@gmail.com, zh@gmail.com'}}
        ];
        var string=[];
        for (let i=0;i<array.length;i++)
        {
            // console.log(array[i].email);
            string.push(array[i].email.email);
        }
        // console.log(string);
        var newstring=[];
        newstring=string.join(",");
        // for (var i=0;i<string.length;i++)
        // {
        //     newstring.push(string[i].split(","));

        //     newstring=string[i].split(",");
        //     console.log(newstring);
        // }
        console.log(newstring);
        
}