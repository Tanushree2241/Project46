class Player {
    constructor() {
        this.spot = 0;
        this.playerName = null;
        this.dicenumber = 0;
        this.index = 1;
    }

    roll(){
      this.dicenumber = floor(random(1,7));
      var check = this.spot + this.dicenumber;
      if(check<=99){
          this.spot += this.dicenumber;
      }
    }

    getName(name) {
        this.playerName = name;

    }

    show(tiles,Player1,Player2){
        if(this.spot<=99){
            var current = tiles[this.spot];
            var center = current.getCenter();
            

            if(this.playerName === "Player1"){
                fill("blue");
            }else{
               fill("green");
            }   

            if(player1.spot===player2.spot){
                if(this.playerName === "Player1"){
                    ellipse(center[0]-20,center[1],20,20);
                }else{
                    ellipse(center[0]+20,center[1],20,20);
                }
            }else{
                ellipse(center[0],center[1],32,32); 
            }
        }
    }


}