class Ground2{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:9
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
  
