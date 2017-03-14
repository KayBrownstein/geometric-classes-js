class Square {
  constructor(length, x, y) {
    this.length = length;
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

  area() {
    this.area = this.length * this.length;
    return this.area;
  }

  perimeter() {
    this.perimeter = this.length * 4;
    return this.perimeter;
  }

  contains_point(x, y) {
    if (x >= this.x - (this.length / 2.0) && x <= this.x + (this.length / 2.0) && y >= this.y - (this.length / 2.0) && y <= this.y + (this.length / 2.0)) {
      return true;
    }
    else {
      return false;
    }
  }
}
