'use strict';

// Example of a JavaScript class.
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	// Method
	getArea() {
		return this.height * this.width;
	}
}

let rectangle = new Rectangle(20, 20);
console.log(rectangle.getArea());

