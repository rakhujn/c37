class Game {
  constructor(){}
  
  //called in sketch.js
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //called in sketch.js
  async start(){
    if(gameState === 0){
      player = new Player(); //using player class
      var playerCountRef=await database.ref("playerCount").once("value") ;
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      form = new Form() // using form class
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100)
    Player.getplayerInfo();

    if(allPlayers!==undefined){
      var display_positon=130;
      for(var plr in allPlayers){
        if(plr === "player" + player.index)
          fill("red")
        
        else
          fill("black");
      display_positon+=20;
      textSize(15);
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_positon)
      }
    }
  

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance+=50;
      player.update();
    }
  }
}
