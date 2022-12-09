song = "";
Left_WristX = 0;
Left_WristY = 0;

Right_WristX = 0;

Right_WristY = 0;

function preload(){

 song = loadSound("music.mp3");

}

function setup(){

canvas = createCanvas(600, 500);

canvas.center();

video = createCapture(VIDEO);

video.hide();

posenet = ml5.poseNet(video, moddelLoaded);

posenet.on('pose', gotPoses); //Turns on the posenet variable model power!//

}

function gotPoses(results){

    if(results.length > 0){

      console.log(results);

      Left_WristX = results[0].pose.leftWrist.x;

      Left_WristY = results[0].pose.leftWrist.y;

      Right_WristX = results[0].pose.rightWrist.x;

      Right_WristY = results[0].pose.rightWrist.y;

      console.log("The Left WristX = " + Left_WristX + "And the Left Wrist Y = " + Left_WristY );

      console.log("The Right WristX = " + Right_WristX + "And the Right Wrist Y = " + Right_WristY);

    }

}

function moddelLoaded(){

  console.log("The PoseNet Model is Initialized!");

}

function draw(){

   image(video, 0, 0, 600, 500);

}

function play(){

     song.play();

     song.setVolume(1);

     song.rate(1);

  
  }
  
