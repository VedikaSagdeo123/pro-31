class Particle{
    constructor(y) {
        var options = {
        isStatic: false
        }

        this.r = 0;
        this.x = random;
        this.body = Bodies.circle(0,y, this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("pink")
        fill("blue")
        fill(255)
        fill(225)
        fill(0)
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}