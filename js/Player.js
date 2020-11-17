class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }


  //called in player.js
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //called in form.js
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    })
  }

  //called in form.js
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getplayerInfo(){
    var playerInfoRef=database.ref("players");
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val();
    })
  }
}
