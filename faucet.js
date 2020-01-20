function Faucet(_x) {
  this.x = _x;
  this.isOn = false;
  this.drops = [];

  this.power = function() {
    this.isOn = !this.isOn;
  }

  this.makeItRain = function(speed, acc, fRate) {
    if(this.isOn) {
      let d = new Raindrop(this.x, -100, speed, acc, fRate);
      this.drops.push(d);
    }

    for( let i = 0; i < this.drops.length; i++) {
      this.drops[i].show();
      let gone = this.drops[i].update();
      gone ? this.drops.splice(i, 1) : null;
    }
  }
}
