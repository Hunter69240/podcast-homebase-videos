
import React from 'react';
import { getFeaturedEpisodes } from '@/data/podcastData';
import EpisodeCard from './EpisodeCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

const FeaturedEpisodes: React.FC = () => {
  const featuredEpisodes = getFeaturedEpisodes();
  
  return (
    <section className="py-12 md:py-16 podcast-section" style={{ '--delay': '1' } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Episodes</h2>
          <a href="#" className="text-podcast-primary hover:underline">View all</a>
        </div>
        
        <Carousel className="w-full relative">
          <CarouselContent>
            {featuredEpisodes.map((episode) => (
              <CarouselItem key={episode.id} className="md:basis-1/2 lg:basis-1/2">
                <EpisodeCard episode={episode} featured={true} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative static transform-none" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">Follow us on social media</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;
