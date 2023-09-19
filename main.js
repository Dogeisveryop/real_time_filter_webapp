nose_x = "" ;
nose_y = "" ;
function preload() {
clown_nose = loadImage("https://i.postimg.cc/QNzN2gp0/Clown-Nose-PNG-Image.png");
    
 }

 function setup() {
    canvas = createCanvas(400 , 400);
    canvas.center()

    video = createCapture(VIDEO);
    video.size(400 , 400 );
    video.hide()

    pose = ml5.poseNet(video , modelloaded);
    pose.on("pose",gotposes);
 }

 function gotposes(results) {
   if( results.length > 0){
      console.log(results);
      nose_x = results[0].pose.nose.x - 15;
      nose_y = results[0].pose.nose.y  - 10;
      console.log("Nose x = " + nose_x );
      console.log("Nose y = " + nose_y );
   }
 }

 function modelloaded() {
   console.log("PoseNet is loaded");
 }

 function draw() {
   image(video ,0,0,400,400); 
   image(clown_nose , nose_x , nose_y , 30, 30 );
 }

 function Snapshot() {
    save("filter.png");
 }