
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedEpisodes from '@/components/FeaturedEpisodes';
import RecentEpisodes from '@/components/RecentEpisodes';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedEpisodes />
        <RecentEpisodes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
