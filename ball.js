class Ball{
    constructor(x,y){
        var options = {
            isStatic:false,
        restitution:1, 
        friction:0,
        density:0.8,   
        }
        this.body = Bodies.circle(x,y,20,options);
        this.width =this.body.circleRadius;
        this.height=this.body.circleRadius;
      //  this.maxSides = {x:85,y:-85};
        World.add(world,this.body);
    }
    display(){
        fill("red");
       push();
     
  //ellipse(0,0,this.width,this.height);
        var pos = this.body.position;
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.width,this.height);
      pop();
    }

}