class Box {
    constructor(x,y){
        var options = {
            restitution : 0.7,
            friction : 1,
            density : 20
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width = 40;
        this.height = 40;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        stroke("black");
        strokeWeight(3);
        rect(0,0,this.width,this.height);
        pop();
    }
}