function myObject1()
{
    var person={
        firstname:"Adeel",lastname:"Zafar",age:23,City:"Lahore",
        fullname:function(){
            return this.firstname + " " + this.lastname;
        }
    };
    // console.log(person.firstname + " " + person.lastname + " is a good boy and age is " + person.age);
    // var x="lastname";
    // var text="";
    // for (x in person)
    // {
    //     text += person[x]+ " ";
    // }
    // // console.log(person);
    // console.log(person[x]);
    // console.log(text);
   var newPerson;
   newPerson=Object.values(person);
   console.log(newPerson);


}