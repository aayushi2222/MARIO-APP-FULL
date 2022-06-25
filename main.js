 gameStatus = "";
 NoseX ="";
 NoseY ="";
 
 function startGame(){
gameStatus = "true";
document.getElementById("status").innerHTML = "Game is loading";

 }

 function preload() {
	world_start = loadSound("world_start.wav");
	jump_sound = loadSound("jump.wav");
	kick_sound = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	coin_sound = loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(300,336);
	video.parent('gameconsole');

	poseNet = ml5.poseNet('video',modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("Your Model Is Initialized!");
}

function gotPoses(results){
if(results.length > 0){
	console.log(results);
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}
}

function draw() {
	game();
}

function game(){
	console.log("noseX ="+ NoseX + ",noseY ="+ NoseY);
}





