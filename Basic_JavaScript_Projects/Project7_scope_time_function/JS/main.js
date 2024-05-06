var X = 10; //Global variable example
function Add_numbers_1(){

    document.write(20 + X + "<br>");
}

function Add_numbers_2(){

    document.write(X + 100 + "<br>");
}

Add_numbers_1();
Add_numbers_2();




 function Add_numbers_3(){

    var Y = 10; //LOCAL VARIABLE EXPAMPLE WRITTEN INSIDE THE FUNCTION
    document.write(20 + Y + "<br>");
}
function Add_numbers_4(){

    document.write(Y + 100);


}

Add_numbers_3();
Add_numbers_4(); 



function Add_numbers_5(){

    var Z = 10; // EXAMPLE USING THE COMNSOLE.LOG TO DEBUG CODE ERROR
    console.log(15 + Z);



}

function Add_numbers_6(){

    console.log(Z + 100);


}

Add_numbers_5();
Add_numbers_6();

//----------------------------------------------------------------//
// CODITIONAL STATEMENTS//
//----------------------------------------------------------------//

function get_Date(){

    if(new Date().getHours() < 23) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//ELSE CONDITIONAL EXAMPLE//

function Age_Function(){

    Age = document.getElementById("Age").value;
    if (Age >= 18) {

        Drive = "You are old enough to drive!";
    }
    else {

        Drive = "You are not old enough to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;

}

// ELSE IF CONDITIONAL EXAMPLE //

function Time_function() {

    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {

        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {

        Reply = "It is afternoon.";
    }
    else {

        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}