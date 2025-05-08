
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from '@/components/ui/navigation-menu';

const Header: React.FC = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold podcast-gradient-text">Atria Podcast Club</span>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="px-3">
              <NavigationMenuLink className="text-foreground hover:text-podcast-primary transition-colors" href="#">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-3">
              <NavigationMenuLink className="text-muted-foreground hover:text-podcast-primary transition-colors" href="#">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-3">
              <NavigationMenuLink className="text-muted-foreground hover:text-podcast-primary transition-colors" href="#">
                Shows
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-3">
              <NavigationMenuLink className="text-muted-foreground hover:text-podcast-primary transition-colors" href="#">
                Engage with us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-3">
              <NavigationMenuLink className="text-muted-foreground hover:text-podcast-primary transition-colors" href="#">
                Contact us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="bg-podcast-primary hover:bg-podcast-secondary">Subscribe</Button>
      </div>
    </header>
  );
};

export default Header;
