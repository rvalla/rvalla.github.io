class button {

  constructor(x, y, r, fc, bc) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.w = round(this.r/10);
    this.f = fc;
    this.b = bc;
  }

  contains(x, y) {
    return dist(x, y, this.x, this.y) < this.r;
  }

  display(x, y) {
    if (this.contains(x, y)) {
      fill(this.b);
      stroke(this.f);
      strokeWeight(this.w);
    } else {
      fill(this.f);
      noStroke();
    }
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r)
  }

}
