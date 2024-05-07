function full_sentence(){//Example of a function to concatenate 4 variables in a sentence using string method concatenate

    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";

    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method(){//Example of a function to slice a string using the slice string method

    var Sentence = "All work and no play makes Johny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}

function upper_case(){//Example of a function to covert to uppercase letter a string using the uppercase string method

    var text = "hello world!";
    var TEXT = text.toUpperCase();
    document.getElementById("upper").innerHTML = "This " +  text  + " now is " + TEXT;
}
function look_For(){//Example of a function using search string method

        var text = "Mr. Blue has a blue house";
        var position = text.search("Blue");
        document.getElementById("word").innerHTML = "The word Blue is in position number " + position + " in the sentence."
    


}

function string_Method(){//Example of a function using toString method

    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method(){//Example of a function using toPrecision method

    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);


}

let num = 5.56789;//Example  using toFixed method
let formatted = num.toFixed(2); // Converts 5.56789 to "5.57"
console.log(formatted);


const text = new String("Hello World!");
const result = text.valueOf(); // Returns the primitive value of the string

class Box {
    #value;
    constructor(value) {
      this.#value = value;
    }
    valueOf() {
      return this.#value;
    }
  }
  
  const box = new Box(123);
  console.log(box.valueOf()); // 123
  

