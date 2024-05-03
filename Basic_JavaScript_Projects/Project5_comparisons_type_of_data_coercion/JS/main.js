document.write(typeof "Word","<br>"); // Example of typeof 

document.write(typeof 3,"<br>"); // Example of typeof

document.write("10" + 5,"<br>"); // Concatenate diferent type of data number and string combined

function not_a_Number() {

    document.getElementById("nNum").innerHTML = 0/0;    //Example of math expression NaN
}

function true_Function(){

    document.getElementById("True").innerHTML = isNaN('This is a string')
}

function false_Function(){

    document.getElementById("False").innerHTML = isNaN('007');

}

function infinity_Number(){
    
    document.getElementById("Infinity").innerHTML = (2E310);

}

function ninfinity_Number(){

    document.getElementById("nInfinity").innerHTML = (-3E310);
    
}

document.write(10>2,"<br>");

document.write(10<2,"<br>");

console.log(2 + 2);

console.log(10<2);

document.write(10 == 10,"<br>"); //Example of == use

document.write(3 == 11,"<br>");

x = 10;
y = 10;
document.write(x === y,"<br>");//Example of === use

a = 10;
b = "doce";
document.write(a === b,"<br>");

i = 20;
j = "20";
document.write(i === j,"<br>");

k = 15;
l = 25;
document.write(k === l,"<br>");

document.write(5>2 && 10>4,"<br>"); // Example of && use
document.write(5>10 && 10>4,"<br>");
document.write(5>10 || 10>4,"<br>");//Example of || use
document.write(5>10 || 10>20,"<br>");

function not_Function() {

    document.getElementById("Not").innerHTML = !(20 > 10); // Example of ! use

}

function dnot_Function(){

    document.getElementById("dNot").innerHTML = !(5 > 10);
}

