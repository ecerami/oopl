let marvel = ["thor", "spiderman", "black panther"];

// Arrow Function Example
let marvelUpperCase = marvel.map(hero => {
	return hero.toUpperCase();
});
console.log(marvelUpperCase);

// Even More Compact Arrow Function
marvelUpperCase = marvel.map(hero => hero.toUpperCase());
console.log(marvelUpperCase);
