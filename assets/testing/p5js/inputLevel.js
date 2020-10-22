class inputLevel {

  constructor(w) {
    this.b = 3 * height / 4;
    this.l = height / 4;
    this.w = w;
    this.c = color(60,140, 220);
    this.lh1 = b;
    this.lh2 = b;
    this.cn1 = [width / 6, this.b];
    this.cn2 = [width - this.cn1[0], this.b];
    this.v1 = [width / 5, this.b];
    this.v5 = [width - this.v1[0], this.b];
    this.v2 = [width / 4, this.b];
    this.v4 = [width - this.v2[0], this.b];
    this.v3 = [width / 2, this.b];
  }

  display() {
    stroke(this.c);
    strokeWeight(this.w);
    noFill();
    beginShape();
    curveVertex(this.cn1[0], this.cn1[1]);
    curveVertex(this.v1[0], this.v1[1]);
    curveVertex(this.v2[0], this.lh2);
    curveVertex(this.v3[0], this.lh1);
    curveVertex(this.v4[0], this.lh2);
    curveVertex(this.v5[0], this.v5[1]);
    curveVertex(this.cn2[0], this.cn2[1]);
    endShape();
  }

  update(l) {
    this.c = this.getColor(l);
    this.lh1 = map(l, 0, 1, this.b, this.b - this.l);
    this.lh2 = map(l, 0, 1, this.b, this.b - this.l/8);
  }

  getColor(l) {
    if (l < 0.025) {
      return color(60,140, 220);
    } else if (l >= 0.025 && l < 0.25) {
      return color(210, 210, 80);
    } else {
      return color(200,77,74);
    }
  }

}
