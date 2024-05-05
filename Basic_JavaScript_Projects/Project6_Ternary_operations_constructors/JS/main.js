function vote_Function() {

    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Ride = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Ride + " to vote.";
}

function Vehicle (Make, Model, Year, Color) {

    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;              
}
 var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
 var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
 var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
 function my_Function()     {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;

 }

 function Pet (Type, Race, Age, Color) {

    this.Pet_Type = Type;
    this.Pet_Race = Race;
    this.Pet_Age = Age;
    this.Pet_Color = Color;

 }
 var Xavier = new Pet("Dog","German_Shepard", 3, "Black");
 var Garret = new Pet("Cat","Siames",4,"white");
 var  Trommon = new Pet("Gecko", "Lizard", 2, "Yellow");
 function new_Function(){

    document.getElementById("New_and_This").innerHTML = "My friend Tromom has a " + Trommon.Pet_Color + "-colored " + Trommon.Pet_Type + " which age is about " + Trommon.Pet_Age + " years old.";
 }

 function count_Function {

   document.getElementById("Nested_Function").innerHTML = Count();
   function Count() {

      var Starting_point = 9;
      function Plus_one() {Starting_point += 1;}
      Plus_one();
      return Starting_point;
   }
 }

