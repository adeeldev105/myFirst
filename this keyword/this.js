function fun1()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            const error=false;
            if(error!=true)
            {
                console.log("Your promise has been resolved !!!");
                resolve({status: 'done'});
            }
            else
            {
                console.log("Your promise has not been resolved !!!")
                reject('incomplete');
            }
        },500);
    })
}




fun1().then(function(value)
{
    console.log(value.status);
    // console.log("Adeel: Thanls for resolving")
}).catch(function(get)
{
    console.log("Get : ",get)
    console.log("Soorrryyyyyyyy!!!")
});