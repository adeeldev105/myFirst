var filefs = require('fs');
function mySync() {
    var data;
    data = filefs.readFileSync("zain.txt", "utf-8");
    console.log("Inside Sync data : ", data);
    return data;
}
var prom1 = new Promise((resolve, reject) => {
    console.log("Reading file asyncronously ....adeel.txt");
    filefs.readFile("adeel.txt", "utf-8", (err, data1) => {
        if (err) {
            reject(err);
        }
        else {
            console.log("Data in file adeel :", data1);
            resolve(data1);
        }
    });
    console.log("Have read the file.....");
});
var myFunction = async ()=>
{
    console.log("File system started ....!!!");
    console.log("a) Syncronous Call ........");
    var value = mySync();
    console.log("OutSide Sync data retrieved : ", value);
    ///////////////async method
    console.log("b) Asyncronous Call    ....");
    try {
        var data2 = await prom1;
        console.log("Successfully retrieved Data 2 outside of async function :", data2);
    } catch (err) {
        console.log(err);
    }
}
myFunction();
// console.log("Ended............!!!");

setTimeout(() => {
    console.log("Ended............!!!");
}, 500);

