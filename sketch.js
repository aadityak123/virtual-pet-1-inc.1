//Create variables here
var dog, dogImg, happyDogImg, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);

dog.image = loadImage(dogImg);

database = firebase.database();
foodStock = database.ref('food');
foodStock.on("value",readStock);

  
  
}


function draw() {  

  if(keyWentDown("UP_ARROW")){
  database.ref('food');
  database.set('food'-1)
   dog.addImage(happyDogImg);

  }

  background(46,139,87);

  database.ref('food');

  text("food left:"+food,500,100);

  drawSprites();
  //add styles here

}



