class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:1,
            friction:1
        }
        this.image=loadImage("mango.png");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}