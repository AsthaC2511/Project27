class Bob{
    constructor(x,y,radius){
        var options={
            
            restitution:1,
            friction:0,
            density: 0.8
      }
      this.y=y;
      this.x=x;
      this.radius=radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
      
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill (255,0,255);
        ellipse(pos.x,pos.y,this.radius);
       
        
    }
}
