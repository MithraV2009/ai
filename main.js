song="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("modelloaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("left wrist x = "+leftwristx+" left wrist y = "+leftwristy);
        console.log("right wrist x = "+rightwristx+" right wrist y = "+rightwristy);
    }

}
function draw(){
    image(video,0,0,600,500);
    circle(leftwristx,leftwristy,20);
    fill("red");
    stroke("black");
    innumberleftwristy=Number(leftwristy);
    remove_decimal=floor(innumberleftwristy);
    volume=remove_decimal/1000;
    volume1=volume*2;
    document.getElementById("volume").innerHTML="volume = "+volume1;
    song.setVolume(volume1);
    }
function play(){
    song.play();
}
