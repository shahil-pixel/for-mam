class Rope {
    constructor(body1,body2,offsetX,offsetY){
    var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
    }
     this.offsetX = offsetX
     this.offsetY = offsetY
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    
    
      }
      //fly(){
     //this.sling.bodyA = null ; 
      //}
    
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        strokeWeight(4);

        var pointAX=posA.x
        var pointAY=posA.y

        var pointBX=posB.x+this.offset.X
        var pointBY=posB.y+this.offset.Y
        

        line(pointAX,pointAY,pointBX,pointBY);
        
        
      
    }
  }