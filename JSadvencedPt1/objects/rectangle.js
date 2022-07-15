function rectangle(base, hight, color) {
  class Rectangle {
    constructor(base, hight, color) {
      this.width = Number(base);
      this.height = Number(hight);
      this.color = color[0].toUpperCase() + color.slice(1)
    }
    calcArea() {
      return this.width * this.height;
    }
  }
  return new Rectangle(base, hight, color);
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());