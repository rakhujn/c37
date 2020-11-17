var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var distance=0;

var form, player, game;

allPlayers;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(playerCount===1){
    clear();
    game.play();
  }
}