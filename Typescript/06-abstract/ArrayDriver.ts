import { Shape } from './shape';
import { Circle } from './circle';
import { Rectangle } from './rectangle';

let myCircle = new Circle(10, 20, 5);
let myRectangle = new Rectangle(0, 0, 40, 40);

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}