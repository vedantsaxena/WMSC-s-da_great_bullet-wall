class wall {
    constructor(thickness){
        this.x = 1500;
        this.y = 200;
        this.thickness = thickness;
        this.sprite = createSprite(this.x,this.y,this.thickness,this.thickness*2);
        this.sprite.shapeColor = color(230,230,230);
        this.sprite.visible=false;
    }
}