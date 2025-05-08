
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 podcast-section" style={{ '--delay': '0' } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="podcast-gradient-text block">Atria Podcast Club</span>
                Discover Amazing Stories
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Listen to engaging conversations with thought leaders, experts, and fascinating personalities
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-podcast-primary hover:bg-podcast-secondary">
                Latest Episodes
              </Button>
              <Button variant="outline" className="border-podcast-primary text-podcast-primary hover:bg-podcast-light">
                <Play className="mr-2 h-4 w-4" /> Start Listening
              </Button>
            </div>
          </div>
          <div className="mx-auto overflow-hidden rounded-2xl">
            <div className="relative h-full animate-pulse-gentle">
              <img
                alt="Podcast hero image"
                className="object-cover"
                src="/placeholder.svg"
                width={550}
                height={550}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-podcast-primary/20 to-podcast-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
