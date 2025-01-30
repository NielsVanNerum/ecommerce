"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myShape = new shape_1.Shape(10, 20);
console.log(myShape.getInfo());
var myCircle = new circle_1.Circle(10, 20, 5);
console.log(myCircle.getInfo());
var myRectangle = new rectangle_1.Rectangle(0, 0, 40, 40);
console.log(myRectangle.getInfo());
