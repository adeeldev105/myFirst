var filesystem=require('fs');
async function myAsyncronous(prom1)
{
   prom1= new Promise ((resolve, reject) => 
    {
        console.log("Reading file asyncronously ....adeel.txt");
        filesystem.readFile("adeel.txt", "utf-8", (err, data1) => {
            if (err) 
            {
                reject(err);
            }
            else {
                console.log("Data in file adeel :", data1);
                resolve(data1);
            }
        });
    });
    return prom1;
}

var myFunction = async () => 
{
    var prom1;
    console.log("Async Call() .....");
    var data;
    data=await myAsyncronous(prom1);
    try{
        console.log("Data retrieved in main function : ",data);
    }
    catch(err)
    {
        console.log(err);
    }
    console.log("Ended ..............");
}
console.log("Started ..............");
myFunction();
