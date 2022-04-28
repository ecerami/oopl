
// Example #1:  Non-Generic Version
function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
let randomNumber = getRandomNumberElement(numbers);
console.log(randomNumber);

// Example #2:  Non-Generic Version
function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let sentence = ["the", "quick", "brown", "fox"];
let randomWord = getRandomStringElement(sentence);
console.log(randomWord);

// Example #3:  Moving to Generics
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

randomNumber = getRandomElement(numbers);
randomWord = getRandomElement(sentence);
console.log(randomNumber, randomWord);