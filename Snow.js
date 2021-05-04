class Snow{
    constructor(x,y,radius){
        var options={
        'density':0.1,
        'friction':0.1,
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        this.image=loadImage("snow4.webp");
        World.add(world,this.body);
    }
    
     display(){
         var pos=this.body.position;
         var angle=this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image( this.image,0, 0, this.radius, this.radius);
         pop();
     }


}