class Ground {
    constructor(x,y,w,h){
        var options = {
            isStatic : true,
        }
        this.land = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.land);

    }
    display(){
        push();
        var pos = this.land.position;
        rectMode(CENTER);
        fill("lightBlue");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}