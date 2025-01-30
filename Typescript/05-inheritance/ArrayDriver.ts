import { Shape } from './shape';
import { Circle } from './circle';
import { Rectangle } from './rectangle';

let myShape = new Shape(10, 20);
let myCircle = new Circle(10, 20, 5);
let myRectangle = new Rectangle(0, 0, 40, 40);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}