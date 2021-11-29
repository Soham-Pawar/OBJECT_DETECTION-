var status = "";

function preload(){
    img = loadImage("Fruit_Basket.jpg");
}
    
function setup(){
canvas = createCanvas(640,420);
canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status2").innerHTML = "Status:- Detecting Objects";
}
    
function modelLoaded(){
    console.log('Model Loaded');
    status = true;
    objectDetector.detect(img,gotResult);
}
    
function gotResult(error,results){
    if(error){
    console.error(error);
}
else{
    console.log(results);
}
}

function draw(){
image(img,0,0,640,420);
fill("#0000FF");
textSize(17);
text("Fruit Basket 86%",70,85);
noFill();
stroke("#0000FF");
rect(40,50,550,350);
}

function back(){
window.location = "index.html";
}