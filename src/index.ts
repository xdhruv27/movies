import { MovieDatabase } from "./MovieDatabase";

const db = new MovieDatabase();

db.addMovie("1", "Inception", "Christopher Nolan", 2010, "Sci-Fi");
db.addMovie("2", "Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
db.addMovie("3", "The Dark Knight", "Christopher Nolan", 2008, "Action");
db.addMovie("4", "Parasite", "Bong Joon-ho", 2019, "Thriller");
db.addMovie("5", "The Godfather", "Francis Ford Coppola", 1972, "Crime");

db.rateMovie("1", 5);
db.rateMovie("1", 4);
db.rateMovie("2", 5);
db.rateMovie("3", 5);
db.rateMovie("4", 4);
db.rateMovie("5", 5);

console.log("All Movies:", db.getTopRatedMovies());
console.log("Sci-Fi Movies:", db.getMoviesByGenre("Sci-Fi"));
console.log("Movies by Christopher Nolan:", db.getMoviesByDirector("Christopher Nolan"));
console.log("Search for 'Dark':", db.searchMoviesBasedOnKeyword("Dark"));
console.log("Average rating of Inception:", db.getAverageRating("1"));
db.removeMovie("1");
console.log("Movies after removing Inception:", db.getTopRatedMovies());