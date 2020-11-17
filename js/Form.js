class Form {
  constructor() {
    this.input=createInput("Name");
    this.button = createButton('Play');
    this.greeting=createElement("h2");
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
   
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    /*we generally write function mousePressed but here it is
    shown as mousePressed(function()) */

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      //this part is related to the player.js
      playerCount+=1;
      player.index=playerCount;
      player.update() //player.js
      player.updateCount(playerCount); //player.js
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
