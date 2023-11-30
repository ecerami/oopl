let movies = [
	{ title: "Black Panther", rating: 95 },
	{ title: "The Matrix", rating: 83 },
	{ title: "Lord of the Rings:  The Two Towers", rating: 95 }
];

// Another Arrow Function
let bestMovies = movies.filter(movie => {
	return movie.rating >= 90;
});
console.table(bestMovies);

// Even more compact
bestMovies = movies.filter(movie => movie.rating >= 90);
console.table(bestMovies);
