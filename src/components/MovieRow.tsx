import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard from "./MovieCard";
import { useState } from "react";

interface Movie {
  id: number;
  title: string;
  image: string;
  year: string;
  rating: string;
  genre: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 300;
    if (direction === 'left') {
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    } else {
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
        
        <div className="relative group">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity h-full rounded-l-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Movies Container */}
          <div className="overflow-hidden">
            <div 
              className="flex space-x-4 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {movies.map((movie) => (
                <div key={movie.id} className="flex-shrink-0 w-48">
                  <MovieCard {...movie} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity h-full rounded-r-none"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MovieRow;