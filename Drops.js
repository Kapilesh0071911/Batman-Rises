class Drops {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 2.5,
            density: 0.5
            
        }
       // this.image = loadImage("Walking Frame/walking_1.png");
        this.drops = Bodies.circle(x,y,7,options);
        this.radius = 7;
        World.add(world, this.drops)
       
        
    }

    display(){
        var pos = this.drops.position;
        ellipseMode(CENTER);
        fill("skyBlue");
       ellipse(pos.x,pos.y,7,7);
    }
}
