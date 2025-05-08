
export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  publishDate: string;
  featured: boolean;
}

// This is our mock database
export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep001",
    title: "The Future of Technology in Daily Life",
    description: "We discuss how emerging technologies will impact our everyday experiences in the coming decade, from AI assistants to smart home innovations.",
    thumbnail: "/placeholder.svg",
    duration: "42:15",
    publishDate: "2025-04-30",
    featured: true
  },
  {
    id: "ep002",
    title: "Creative Productivity Hacks",
    description: "Our guest shares unconventional methods that have helped boost creativity and productivity in their daily routine.",
    thumbnail: "/placeholder.svg",
    duration: "38:05",
    publishDate: "2025-04-23",
    featured: true
  },
  {
    id: "ep003",
    title: "Mental Health in the Digital Age",
    description: "An insightful conversation about maintaining mental wellbeing while navigating our increasingly digital world.",
    thumbnail: "/placeholder.svg",
    duration: "51:22",
    publishDate: "2025-04-16",
    featured: false
  },
  {
    id: "ep004",
    title: "The Science of Habit Formation",
    description: "We explore the neuroscience behind forming and breaking habits, with practical tips you can apply today.",
    thumbnail: "/placeholder.svg",
    duration: "45:37",
    publishDate: "2025-04-09",
    featured: false
  },
  {
    id: "ep005",
    title: "Remote Work Revolution",
    description: "How the shift to remote work is changing company culture and what it means for the future of collaboration.",
    thumbnail: "/placeholder.svg",
    duration: "39:48",
    publishDate: "2025-04-02",
    featured: false
  },
  {
    id: "ep006",
    title: "Sustainable Living Simplified",
    description: "Practical and accessible ways to reduce your environmental footprint without completely changing your lifestyle.",
    thumbnail: "/placeholder.svg",
    duration: "47:12",
    publishDate: "2025-03-26",
    featured: false
  },
  {
    id: "ep007",
    title: "Art of Meaningful Conversations",
    description: "How to engage in deeper, more fulfilling discussions with friends, family, and even strangers.",
    thumbnail: "/placeholder.svg",
    duration: "44:29",
    publishDate: "2025-03-19",
    featured: false
  },
  {
    id: "ep008",
    title: "Financial Independence 101",
    description: "Basic principles and practical steps toward achieving financial freedom, regardless of your starting point.",
    thumbnail: "/placeholder.svg",
    duration: "56:18",
    publishDate: "2025-03-12",
    featured: false
  }
];

// Function to get featured episodes
export function getFeaturedEpisodes(): PodcastEpisode[] {
  return podcastEpisodes.filter(episode => episode.featured);
}

// Function to get recent episodes (non-featured)
export function getRecentEpisodes(limit: number = 6): PodcastEpisode[] {
  return podcastEpisodes
    .filter(episode => !episode.featured)
    .slice(0, limit);
}

// Function to get episode by id
export function getEpisodeById(id: string): PodcastEpisode | undefined {
  return podcastEpisodes.find(episode => episode.id === id);
}
