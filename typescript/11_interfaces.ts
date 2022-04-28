
/**
 * Example of an Interface with methods.
 */
interface Animal {
    makeNoise(): string;
}

class Cow implements Animal {
    makeNoise(): string {
        return "Moo!"
    }
}

let cow = new Cow();
console.log(cow.makeNoise())

