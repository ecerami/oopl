'use strict';
// Base Class
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

// Dog inherits from Animal.
class Dog extends Animal {
	constructor(name) {
		super(name);
	}

	speak() {
		console.log(`${this.name} barks.`);
	}
}

let a = new Animal("Mammal");
a.speak()

let d = new Dog("Spot");
d.speak();
