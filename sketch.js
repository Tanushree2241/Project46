var tiles = [] , tileSize = 90 , rows , column , x , y , dir=1, form , player1 , player2;

function setup() {
  createCanvas(900,900);
 
  rows = height/tileSize;
  column = width/tileSize;

  x=0;
  y=(rows-1)*tileSize;

  for (var j = 0; j <rows*column; j=j+1) 
  {
    tiles.push(new Tiles(x,y,tileSize,j+1,j));  

    x = x+tileSize*dir;

    if(x>=width || x<=-tileSize){
      dir = dir*-1
      y=y-tileSize;
      x=x+tileSize*dir;
    }
  }

  tiles[26].snake=8;
  tiles[46].snake=36;

 form = new Form();
 player1 = new Player();
 player1.getName("Player1");

 player2 = new Player();
 player2.getName("Player2");

}

function draw() {
  background(255,255,255); 

  for (var i = 0; i < tiles.length; i++) {
    tiles[i].display(tiles);   
  }
  

  form.display();
  player1.show(tiles,player1,player2);
  player2.show(tiles,player1,player2);
}

