
import React from 'react';
import { getRecentEpisodes } from '@/data/podcastData';
import EpisodeCard from './EpisodeCard';

const RecentEpisodes: React.FC = () => {
  const recentEpisodes = getRecentEpisodes();
  
  return (
    <section className="py-12 md:py-16 bg-muted podcast-section" style={{ '--delay': '2' } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Recent Episodes</h2>
          <a href="#" className="text-podcast-primary hover:underline">Browse archive</a>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEpisodes;
