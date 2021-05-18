class Grd{
    constructor(x,y,h,w){
        var options = {
            isStatic :true,
            density : 0.1
        }
        this.body = Bodies.rectangle(x,y,h,w,options);
        World.add(world,this.body);
        this.h = h
        this.w= w
     
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.h,this.w);
        pop();

    }
}