function my_Dictionary(){
    // Define dictionary

    var Animal = {

        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!",

    };
    delete Animal.Sound; // Delete key "Animal.sound"
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}