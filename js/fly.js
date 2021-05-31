class Rope {
    constructor(bodyA,pointB){
        var options = { 
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.2
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){ 
            push();
            var posA = this.rope.bodyA.position;
            var posB = this.rope.pointB;
            strokeWeight(0);
            line(posA.x,posA.y,posB.x,posB.y);
            pop();
        }
    }
    fly(){
        this.rope.bodyA = null;
    }
}