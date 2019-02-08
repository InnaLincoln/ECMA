const exponent = 2;

class Point {
    xPoint: number;
    yPoint: number;
    constructor(x: number, y: number) {
        this.xPoint = x;
        this.yPoint = y;
    }

    get x() {
        return this.xPoint;
    }

    get y() {
        return this.yPoint;
    }

    getPointAtOffset(x1, y1): object {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point): number {
        return Math.sqrt(((this.x - point.x) ** exponent) + ((this.y - point.y) ** exponent));
    }
}

class Shape {
    center: Point;
    constructor(center: Point) {
        this.center = center;
    }
}

class Polygon extends Shape {
    points: Array<Point>;
    constructor(center: Point, points: Array<Point>) {
        super(center);
        this.points = points;
    }
}

class Rectangle extends Polygon {
    width: number;
    height: number;
    constructor(center: Point, width: number, height: number) {
        // @ts-ignore
        super(center, this.points);
        this.width = width;
        this.height = height;
    }

    getPerimeter(): number {
        return exponent * (this.width + this.height);
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    width: number;
    constructor(center: Point, width: number) {
        super(center, width, width);
    }
}

class Circle extends Shape {
    radius: number;
    constructor(center: Point, radius: number) {
        super(center);
        this.radius = radius;
    }

    getPerimeter(): number {
        return exponent * Math.PI * this.radius;
    }

    getArea(): number {
        return Math.PI * (this.radius ** exponent);
    }
}
// @ts-ignore
Shapes = {
    Shape: Shape,
    Polygon: Polygon,
    Rectangle: Rectangle,
    Square: Square,
    Circle: Circle,
    Point: Point
};
