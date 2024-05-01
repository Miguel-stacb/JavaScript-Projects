function addition_Function(){
    var addition = 2 + 2;
    document.getElementById("Plus").innerHTML = "This is the addition example : 2 + 2 = " + addition;
}
function substraction_Function(){
    var substraction = 5 - 2;
    document.getElementById("Minus").innerHTML = "This is the substraction example : 5 - 2 = " + substraction;
}
function multiplication_Function(){
    var simple_Math = 6 * 8;
    document.getElementById("Times").innerHTML = "This is the multiplication example : 6 * 8 = " + simple_Math;
}
function division(){
    var div_Math = 48 / 6;
    document.getElementById("Per").innerHTML = "This is the division example : 48 / 6 = " + div_Math;
}

function more_Math(){
    var result = (1+2) * 10 / 2 - 5;
    document.getElementById("All").innerHTML = "1 plus 2, multiplied by 10, divided in half and then substracted by 5 equals : " + result;
}

function modulus_Operator(){
    var mod = 25 % 6;
    document.getElementById("Rem").innerHTML = "When you divide 25 by 6 you have a reminder of: " + mod;
}

function negation_Operator(){
    var x = 10;
    document.getElementById("Neg").innerHTML = -x;
}

function increment_Operator(){
    var I = 5;
    I++;
    document.getElementById("Inc").innerHTML = "Number 5 after increment operator is : " + I;
}
function decrement_Operator(){
    var D = 5.25;
    D--;
    document.getElementById("Dec").innerHTML = "Number 5.25 after decrement operand is : " +  D;
}

function random_Number(){
    var rnd = Math.random();
    document.getElementById("ROM").innerHTML = window.alert(rnd);

}
function random_Num100(){
    var rnd1 = (Math.random() * 100);
    document.getElementById("ROM1").innerHTML = window.alert(rnd1);

}

function power_Operator(){
    var P = Math.pow(2,8);
    document.getElementById("Power").innerHTML= "Math.pow(x,y) returns the value of x to the power of y. So 2 to the power of 8 is : " + P;
}