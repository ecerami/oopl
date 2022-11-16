let movies = [
	{ movie: "Black Panther", rating: 95 },
	{ movie: "Black Adam", rating: 89 },
	{ movie: "Ticket to Paradise", rating: 88 },
];

// Another Arrow Function
let bestMovies = movies.filter((movie) => {
	return movie.rating >= 90;
});
console.log(bestMovies);

// Even more compact
bestMovies = movies.filter((movie) => movie.rating >= 90);
console.log(bestMovies);
