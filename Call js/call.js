function CallFun()
{
    var person = {
        fullName: function(city,country) 
        {
          return this.firstName  + " " + this.lastName  + " is living in " + city + "," +country;
        }
      }
      var person1 = {
        firstName:"John",
        lastName: "Doe",
        age:24

      }
      var person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }

      var value=person.fullName.call(person1,"Lahore","Pakistan");
      

      console.log(value);
      
}
function ApplyFun()
{
    var person = {
        fullName: function(city,country)
        {
          return this.firstName2 + " " +  this.lastName2 + " is living in " + city + "," +country;
        }
      }
      var person1 = {
        firstName1:"John",
        lastName1: "Doe"

      }
      var person2 = {
        firstName2:"Mary",
        lastName2: "Doe"
      }
      var value=person.fullName.apply(person2,["Karachi","Pakistan"]);
    // var value=Math.max.apply(null,[1,2,3,4,5]);
      console.log("Max : ",value);

}
function BindFun()
{
    var name1={
        name : "Adeel",
        age:24
    };
    var name2={
        name : "Zain",
        age :25
    };
    var name3={
        name : "Sohail",
        age:23
    };


    function display(...country)
    {
       return (`My name is ${this.name}.My age is ${this.age} .I'm ${country}`);
    }
    // var display=() => {
    //     console.log("name :",this);
    //     // return `My name is ${this.name}.My age is ${this.age}`;
    // }
    var ret1=display.bind(name1,1,2,3,4,5);
    console.log(ret1());
   
}