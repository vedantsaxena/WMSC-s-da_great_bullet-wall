  var bullets,walls,wall2;
  var damage;
  var weight;
  var speed;

  

  function setup() {
    createCanvas(1600,400);

 
  bullets = new bullet(random(30,52),random(223,321));
  walls = new wall(random(22,83));
  wall2 = createSprite(1500,200,60,400);
  wall2.shapeColor = color(230,230,230);

  
  }

  function draw() {
    background(0);

    damage = (0.5*bullets.sprite.weight*bullets.sprite.speed*bullets.sprite.speed)/(walls.thickness*walls.thickness*walls.thickness);

   

    bullets.sprite.collide(walls.sprite,clcDamage); 

    hasCollided(bullets.sprite,walls);


    drawSprites();
 
  }
  function clcDamage(){
    if (damage<10){
     wall2.shapeColor = color(0,255,0);
  }
    if (damage>9){
      wall2.shapeColor = color(255,0,0);
    } 
  }
  