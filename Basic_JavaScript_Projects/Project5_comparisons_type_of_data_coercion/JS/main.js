document.write(typeof "Word","<br>");

document.write(typeof 3,"<br>");

document.write("10" + 5);

function not_a_Number() {

    document.getElementById("nNum").innerHTML = 0/0;    
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

