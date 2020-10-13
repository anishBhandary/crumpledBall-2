class Paper {
    constructor(x, y,width,height) {
      var options = {

        
      };
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("sprites/paper.png");
      World.add(world, this.body);
    };
    display(){
      Push();
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop();
    };
  };
  