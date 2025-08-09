import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-movie.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
            NEXUS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
            In a world where reality and digital realms collide, one programmer must navigate through layers of existence to save humanity from an AI uprising.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 rounded-md font-semibold"
            >
              <Play className="mr-2 h-6 w-6 fill-current" />
              Play
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-muted/30 text-foreground hover:bg-muted/50 text-lg px-8 py-6 rounded-md font-semibold backdrop-blur-sm"
            >
              <Info className="mr-2 h-6 w-6" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;