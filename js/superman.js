class SuperMan {
    constructor(x,y,r){
        var options = {
            //isStatic : true,
            density : 1,
            frictionAir : 0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(world,this.body);
        this.image = loadImage("images/Superhero-01.png");

    }
    display(){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,150,70);
        pop();
    }
}