let posX, xSpeed;
function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill("limegreen");
}
function draw(){
    background("skyblue")
    circle(300,200,50); 
    xSpeed += 5
}


