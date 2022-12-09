music_file1 = "";

music_file2 = "";



function setup(){
    
    canvas = createCanvas(393, 393);

    canvas.center();

    video = createCapture(VIDEO);

    video.hide();

     
}


function draw(){
    image(video, 0, 0, 393, 393);

}

function preload(){

    music_file1 = loadSound("music.mp3");

   music_file2 = loadSound("music2.mp3");
}