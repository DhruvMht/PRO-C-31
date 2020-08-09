class Division{
    constructor(x,y){
    var option = {isStatic:true}
    this.body = Bodies.rectangle(x,y,10,300, option)
    this.width = 10
    this.height = 300
    World.add(world, this.body)
    }

    display(){
        var p = this.body.position;
        fill("white")
        rectMode(CENTER);
        rect(p.x, p.y, this.width, this.height);


    }
}