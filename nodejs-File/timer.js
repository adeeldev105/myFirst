function myTimer()
{
    var count=0;
    var intID=setInterval(counter,1000);
    function counter()
    {
        if (count>5)
        {
            clearInterval();
        }
        else
        {
            console.log(count++);
        }
    }    
}