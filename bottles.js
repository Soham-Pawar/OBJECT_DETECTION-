var status = "";

function preload(){
    img = loadImage("bottles.png");
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
textSize(14);
text("Bottle 45%",105,85);
noFill();
stroke("#0000FF");
rect(80,30,140,370);

fill("#0000FF");
textSize(14);
text("Bottle 65%",425,65);
noFill();
stroke("#0000FF");
rect(400,30,140,370);
}

function back(){
window.location = "index.html";
}