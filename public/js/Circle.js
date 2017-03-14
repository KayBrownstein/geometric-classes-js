class Circle {
  constructor(radius, x, y) {
    this.radius = radius;
    if (x === undefined) {
      this.x = 0;
    }
    else {
      this.x = x;
    }
    if (y === undefined) {
      this.y = 0;
    }
    else {
      this.y = y;
    }
  }

  diameter() {
    this.diameter = 2 * this.radius;
    return this.diameter;
  }

  area() {
    this.area = this.radius * this.radius * Math.PI;
    return this.area;
  }

  perimeter() {
    this.perimeter = 2 * this.radius * Math.PI;
    return this.perimeter;
  }
}
