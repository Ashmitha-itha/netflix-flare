import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
  year: string;
  rating: string;
  genre: string;
}

const MovieCard = ({ title, image, year, rating, genre }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button size="icon" className="bg-foreground text-background hover:bg-foreground/90 h-8 w-8 rounded-full">
                    <Play className="h-4 w-4 fill-current" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-muted bg-transparent hover:bg-muted">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-muted bg-transparent hover:bg-muted">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-muted bg-transparent hover:bg-muted">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Info */}
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span className="text-green-500 font-semibold">{rating}% Match</span>
                  <span>{year}</span>
                  <span className="px-1 border border-muted-foreground/30 rounded text-xs">{genre}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;