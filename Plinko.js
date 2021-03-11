class Plinko {
    constructor(x,y,width,height) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.circle(x,y,this.r,options);
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill("white")
    }
} 