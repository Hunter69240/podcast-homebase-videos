
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold podcast-gradient-text">PodcastBase</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-podcast-primary transition-colors">Home</a>
          <a href="#" className="text-muted-foreground hover:text-podcast-primary transition-colors">Episodes</a>
          <a href="#" className="text-muted-foreground hover:text-podcast-primary transition-colors">About</a>
          <a href="#" className="text-muted-foreground hover:text-podcast-primary transition-colors">Contact</a>
        </nav>
        <Button className="bg-podcast-primary hover:bg-podcast-secondary">Subscribe</Button>
      </div>
    </header>
  );
};

export default Header;
