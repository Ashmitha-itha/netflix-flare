import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-primary text-3xl font-bold">NETFLIX</h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Home
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              TV Shows
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Movies
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              New & Popular
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              My List
            </Button>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search titles..." 
              className="pl-10 w-64 bg-background/80 border-muted"
            />
          </div>

          {/* Icons */}
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;