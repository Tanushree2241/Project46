class Tiles {
    constructor(x,y,wh,next,index) {
       this.x = x;
       this.y = y;
       this.wh = wh;
       this.next = next;
       this.index = index;
       this.snake = -1;
    }

    display(tiles) {
        if(this.index%2 ===0){
          fill("red");
        }else{
            fill("white");
        }
        rect(this.x , this.y , this.wh , this.wh);
        fill("black");
        textSize(50);
        text(this.next ,this.x+7 , this.y+50); 

        if(this.snake>=0){
            var myCenter = this.getCenter();
            var nextCenter = tiles[this.snake].getCenter();
            push();
            strokeWeight(8);
            stroke("green");
           // line(myCenter[0],myCenter[1],nextCenter[0],nextCenter[1]);
            pop();
        }
    }

    getCenter() {
        var cx = this.x+this.wh/2;
        var cy = this.y+this.wh/2;
        return[cx,cy];
    }
}