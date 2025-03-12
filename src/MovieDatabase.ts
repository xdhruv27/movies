export interface Movie {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
  }
  
  export class MovieDatabase {
    private movies: Movie[] = [];
  
    addMovie(id: string, title: string, director: string, releaseYear: number, genre: string): void {
      this.movies.push({ id, title, director, releaseYear, genre, ratings: [] });
    }
  
    rateMovie(id: string, rating: number): void {
      if (rating < 1 || rating > 5) throw new Error("Rating must be between 1 and 5.");
      const movie = this.movies.find(m => m.id === id);
      if (movie) movie.ratings.push(rating);
    }
  
    getAverageRating(id: string): number | undefined {
      const movie = this.movies.find(m => m.id === id);
      if (!movie || movie.ratings.length === 0) return undefined;
      return movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
    }
  
    getTopRatedMovies(): Movie[] {
      return [...this.movies].sort((a, b) => (this.getAverageRating(b.id) || 0) - (this.getAverageRating(a.id) || 0));
    }
  
    getMoviesByGenre(genre: string): Movie[] {
      return this.movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
    }
  
    getMoviesByDirector(director: string): Movie[] {
        return this.movies.filter(m => m.director.toLowerCase() === director.toLowerCase());
      }
    
      searchMoviesBasedOnKeyword(keyword: string): Movie[] {
        return this.movies.filter(m => m.title.toLowerCase().includes(keyword.toLowerCase()));
      }
    
      getMovie(id: string): Movie | undefined {
        return this.movies.find(m => m.id === id);
      }
    
      removeMovie(id: string): void {
        this.movies = this.movies.filter(m => m.id !== id);
      }
    }