nose_x=0;
nose_y=0;
right_wrist_x=0;
left_wrist_x=0;
difference=0;

function setup(){
canvas= createCanvas(550,550);
canvas.position(560,150);

video= createCapture(VIDEO);
video.size(550,550);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("Posenet is intialized");
}

function gotPoses(results){
if(results.length >0){
console.log(results)
nose_x= results[0].pose.nose.x;
nose_y= results[0].pose.nose.y;
console.log("Nose_X="+ nose_x+ "Nose_Y=" + nose_y);
left_wrist_x= results[0].pose.leftWrist.x;
right_wrist_x= results[0].pose.rightWrist.y;
difference= nose_x - nose_y;
console.log("Left_Wrist_X="+ left_wrist_x+ "Right_Wrist_X="+ right_wrist_x+ "Difference="+ difference);
}
}

function draw(){
background("#969A97");
fill("#F90093");
stroke("F90093");
document.getElementById("word_length").innerHTML="Length of the word will be:"+ difference+ "pixel";
text('Font',nose_x,nose_y);
textSize(difference);
}