function Call_loop() {// EXAMPLE OF LOOP FUNCTION USING WHILE

    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += "<br>" + X;
        X ++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {//EXAMPLE OF LOOP FUNCTION USING FOR
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function(){// EXAMPLE OF ARRAY INDEX
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function(){// USE OF CONST RESERVED WORD
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " +  Musical_Instrument.price;
}

var X = 82;// USE OF LET RESERVED WORD
document.getElementById("X").innerHTML = X;
{
    let X = 33;
    document.getElementById("Z").innerHTML = "<br>" + X;
}
document.getElementById("Y").innerHTML = "<br>" + X;

let car = {// EXAMPLE OF CREATING AN OBJECT USING LET
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function(){
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";// EXAMPLE OF "BREAK" WORD USE
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

let text1 = "";// EXAMPLE OF "CONTINUE" WORD USE
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text1 += "The number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text1;