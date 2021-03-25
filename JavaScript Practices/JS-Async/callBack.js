
function CallBack()
{
    const students=[
        {name:"Adeel",course:"BSCS"},
        {name:"Zain",course:"BBA"},
        {name:"Ali",course:"BSIT"}
    
    
    ]
    
    function enrollStudents(student)
    {
        setTimeout(function() {
            students.push(student);
            console.log("Student has benn enrolled");
            // CallBack();
            console.log("sohail");
            getStuddents();
        },5000);

    }
    function getStuddents()
    {
        setTimeout(function()
        {
            let str="";
            students.forEach(function(students)
            {
                str+=`${students.name}  ${"  "}`;
            });
            console.log("Students have been fetched");
            console.log(str + "    ");
    
        },1000);
    }
    let newStudent={name:"Sohail",course:"CSS"};
    enrollStudents(newStudent);
    getStuddents();
}


