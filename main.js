music=""
music1=""

ScoreLeftWrist = ""
ScoreRightWrist = ""

function setup(){
canvas = createCanvas(700,500)
camera = createCapture(VIDEO)
camera.hide()
canvas.center()
Model= ml5.poseNet(camera,modelLoaded)
Model.on("pose",getResults)
}
function draw(){
    image(camera,0,0,700,500);
    if(ScoreRightWrist > 0.2){
    fill("Blue")
    circle(RightWristX,RightWristY,45)
    music.play();
}
 if(ScoreLeftWrist > 0.2){
    fill("Red")
    circle(LeftWristX,LeftWristY,45)
    music1.play
}
}
function preload(){
    music=loadSound("ActualMusic.mp3")
    music1=loadSound("Y2Mate.is - Chug Jug With You - Parody of American Boy (Number One Victory Royale)-Z0Uh3OJCx3o-48k-1646754609657.mp3")
}
function modelLoaded(){
    console.log("MODEL IS LOADED");
}
function getResults(results){
if(results.length > 0){
   
    ScoreLeftWrist = results[0].pose.keypoints[9].score
    console.log("Left Wrist Score - " + ScoreLeftWrist);
    ScoreRightWrist = results[0].pose.keypoints[10].score
    console.log("Right Wrist Score - " + ScoreRightWrist);
}
}
function PlayTheMusic(){
    if(ScoreRightWrist > 0.2){
       
        music.play();
    }
     if(ScoreLeftWrist > 0.2){
     
        music1.play
    }
}
function StopMusic(){
    music.pause()
    music1.pause()
}
