import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";

const Netflix = () => {
  // Sample movie data
  const trendingMovies = [
    { id: 1, title: "Shadow Protocol", image: movie1, year: "2024", rating: "96", genre: "Action" },
    { id: 2, title: "Eternal Love", image: movie2, year: "2023", rating: "88", genre: "Romance" },
    { id: 3, title: "Dark Manor", image: movie3, year: "2024", rating: "91", genre: "Horror" },
    { id: 4, title: "Comedy Gold", image: movie4, year: "2023", rating: "85", genre: "Comedy" },
    { id: 5, title: "Mystic Quest", image: movie5, year: "2024", rating: "93", genre: "Fantasy" },
    { id: 6, title: "Shadow Protocol", image: movie1, year: "2024", rating: "96", genre: "Action" },
    { id: 7, title: "Eternal Love", image: movie2, year: "2023", rating: "88", genre: "Romance" },
  ];

  const popularMovies = [
    { id: 8, title: "Mystic Quest", image: movie5, year: "2024", rating: "93", genre: "Fantasy" },
    { id: 9, title: "Dark Manor", image: movie3, year: "2024", rating: "91", genre: "Horror" },
    { id: 10, title: "Shadow Protocol", image: movie1, year: "2024", rating: "96", genre: "Action" },
    { id: 11, title: "Comedy Gold", image: movie4, year: "2023", rating: "85", genre: "Comedy" },
    { id: 12, title: "Eternal Love", image: movie2, year: "2023", rating: "88", genre: "Romance" },
    { id: 13, title: "Mystic Quest", image: movie5, year: "2024", rating: "93", genre: "Fantasy" },
  ];

  const actionMovies = [
    { id: 14, title: "Shadow Protocol", image: movie1, year: "2024", rating: "96", genre: "Action" },
    { id: 15, title: "Dark Manor", image: movie3, year: "2024", rating: "91", genre: "Horror" },
    { id: 16, title: "Mystic Quest", image: movie5, year: "2024", rating: "93", genre: "Fantasy" },
    { id: 17, title: "Comedy Gold", image: movie4, year: "2023", rating: "85", genre: "Comedy" },
    { id: 18, title: "Eternal Love", image: movie2, year: "2023", rating: "88", genre: "Romance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="relative z-10 -mt-32">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular on Netflix" movies={popularMovies} />
        <MovieRow title="Action & Adventure" movies={actionMovies} />
      </div>
    </div>
  );
};

export default Netflix;