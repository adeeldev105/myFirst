const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let students = [{id: 1, name: "Umar"}, {id: 2, name: "Talha"}, {id: 3, name: "Ali"}];
        console.log(students);
        resolve(students);
    }, 1000);
});
const prom2 = (obj) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside 2nd await");
            let name = obj.name;
            console.log("Prom 2 value :",name);
            resolve(name);
        }, 1000);
    });
}
const getName = async () => {
    console.log("Before 1st await");
    var students = await prom1;
    console.log("After 1st await");
    console.log("Before 2nd await");
    console.log("Student 1",students[0]);
    var name = await prom2(students[1]);
    // await prom2(students[1]);
    console.log("After 2nd await (Promise)");
    console.log("Name :",name);
}
var a=getName();