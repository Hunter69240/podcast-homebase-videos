
import React from 'react';
import { PodcastEpisode } from '@/data/podcastData';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface EpisodeCardProps {
  episode: PodcastEpisode;
  featured?: boolean;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, featured = false }) => {
  return (
    <Card className={`podcast-card group h-full ${featured ? 'md:flex' : ''}`}>
      <div className={`relative ${featured ? 'md:w-2/5' : 'w-full'}`}>
        <img 
          src={episode.thumbnail} 
          alt={episode.title}
          className={`w-full aspect-video object-cover ${featured ? 'md:h-full md:aspect-auto' : ''}`}
        />
        <div className="podcast-play-button top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Play size={featured ? 36 : 24} />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {episode.duration}
        </div>
      </div>
      
      <CardContent className={`p-4 ${featured ? 'md:w-3/5' : ''}`}>
        <div className="flex flex-col h-full justify-between gap-2">
          <div>
            <h3 className={`font-bold ${featured ? 'text-xl md:text-2xl' : 'text-lg'} line-clamp-2`}>
              {episode.title}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm line-clamp-2">
              {episode.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              {new Date(episode.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs hover:text-podcast-primary"
            >
              Listen Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
