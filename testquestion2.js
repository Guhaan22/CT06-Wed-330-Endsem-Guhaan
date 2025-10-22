let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    // Task: Align the text to the center using textAlign
    textAlign(CENTER,CENTER)
    // Task: set font size to 20 using textSize
    yPos = 100;
    textSize(20)
    text("Pikachu",300,0)
    text("Raichu",300,50)
    text("Bulbasaur",300,100)
    text("Mewtwo",300,150)
    text("Charizard",300,200)
}

   
