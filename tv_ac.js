var status = "";

function preload(){
    img = loadImage("Tv_ac.jpg");
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
fill("#00FF00");
textSize(14);
text("AC 55%",285,55);
noFill();
stroke("#00FF00");
rect(260,20,260,100);

fill("#00FF00");
textSize(14);
text("Bottle 45%",285,225);
noFill();
stroke("#00FF00");
rect(240,180,280,170);
}

function back(){
window.location = "index.html";
}