class Point {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  /**
   * @returns {number}
   */
  get x() {
    return this._x;
  }

  /**
   * @returns {number}
   */
  get y() {
    return this._y;
  }

  /**
   * @param {number} x1
   * @param {number} y1
   * @returns {Point}
   */
  getPointAtOffset(x1, y1) {
    return new Point(this.x + x1, this.y + y1);
  }

  /**
   * @param {Point} point
   * @returns {number}
   */
  getDistance(point) {
    return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
  }
}

class Shape {
  /**
   * @param {Point} center
   */
  constructor(center) {
    this._center = center;
  }
}

class Polygon extends Shape {
  constructor(center, points) {
    super(center);
    this._points = points;
  }
}

class Rectangle extends Polygon {
  /**
   * @param {Point} center
   * @param {Rectangle} width
   * @param {Rectangle} height
   */
  constructor(center, width, height) {
    super(center);
    this.width = width;
    this.height = height;
  }

  /**
   * @returns {number}
   */
  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  /**
   * @returns {number}
   */
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  /**
   * @param {Point} center
   * @param {Rectangle} width
   */
  constructor(center, width) {
    super(center, width, width);
  }
}

class Circle extends Shape {
  /**
   * @param {Point} center
   * @param {number} radius
   */
  constructor(center, radius) {
    super(center);
    this._radius = radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this._radius;
  }

  getArea() {
    return Math.PI * (this._radius ** 2);
  }
}

Shapes = {
  Shape: Shape,
  Polygon: Polygon,
  Rectangle: Rectangle,
  Square: Square,
  Circle: Circle,
  Point: Point
};
