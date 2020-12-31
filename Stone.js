class Stone {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image=loadImage("stone.png");
        this.body =Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.width=width;   
        this.height=height;
    }

    display() {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
    }
}