let marvel = ["thor", "spiderman", "black panther"];

// Arrow Function Example
let marvelUpperCase = marvel.map((character) => {
	return character.toUpperCase();
});
console.log(marvelUpperCase);

// Even More Compact Arrow Function
marvelUpperCase = marvel.map((character) => character.toUpperCase());
console.log(marvelUpperCase);
