class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.005
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);    
    }

    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x ,pointB.y);
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(){
        this.sling.bodyA=stone.body;
    }
    
}