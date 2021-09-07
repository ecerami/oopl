'use strict';

// Example of a JavaScript class.
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	// Getter
	get area() {
		return this.calcArea();
	}

	// Private Method
	calcArea() {
		return this.height * this.width;
	}
}

let rectangle = new Rectangle(20, 20);
console.log(rectangle.area);
