import { Shape } from './shape';
import { Circle } from './circle';
import { Rectangle } from './rectangle';

let myShape = new Shape(10, 20);
console.log(myShape.getInfo());

let myCircle = new Circle(10, 20, 5);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 40, 40);
console.log(myRectangle.getInfo());