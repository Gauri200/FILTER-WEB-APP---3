noseX = 0;
noseY = 0;
function preload() {
    mustache=loadImage('https://i.postimg.cc/HWzsMCkd/m.png');
 }

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX= " + noseX);
        console.log("NoseY= " + noseY);
    }

}

function draw() {
    image(video, 0, 0, 350, 350);
    image(mustache,noseX-35,noseY,70,40);
}

function take_snapshot() {
    save('FilterImg.png');
}

