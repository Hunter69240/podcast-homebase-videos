
import React from 'react';
import { getFeaturedEpisodes } from '@/data/podcastData';
import EpisodeCard from './EpisodeCard';

const FeaturedEpisodes: React.FC = () => {
  const featuredEpisodes = getFeaturedEpisodes();
  
  return (
    <section className="py-12 md:py-16 podcast-section" style={{ '--delay': '1' } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Episodes</h2>
          <a href="#" className="text-podcast-primary hover:underline">View all</a>
        </div>
        
        <div className="grid gap-6">
          {featuredEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;
