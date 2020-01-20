
function Raindrop(_x, _y, _speed, _acc, _fRate) {
  this.x = _x;
  this.y = _y;
  this.speed = _speed;
  this.acc = _acc/_fRate;


  this.startY = _y;
  this.startSpeed = _speed;



  this.show = function() {
      stroke(0, 50, 255, 200);
      strokeWeight(5);
      line(this.x, this.y, this.x, this.y + 10);
  }

  this.update = function() {

      if(this.y < height){
        this.y += this.speed;
        this.speed += this.acc;

      }
      else {
        return true;
      }
  }

}
