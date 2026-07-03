import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import MarqueeBanner from '../components/home/MarqueeBanner';
import CategorySection from '../components/home/CategorySection';
import ProductSection from '../components/home/ProductSection';
import AboutSection from '../components/home/AboutSection';
import BlogSection from '../components/home/BlogSection';
import TrustBadges from '../components/home/TrustBadges';
import WelcomeModal from '../components/home/WelcomeModal';
import { neueModelle, hochzeitspakete, ecksofas } from '../data/mockData';

const HomePage = () => {
  return (
    <main>
      <WelcomeModal />
      <HeroSlider />
      <MarqueeBanner />
      <CategorySection />
      <ProductSection title="NEUE MODELLE" products={neueModelle} />
      <AboutSection />
      <ProductSection title="HOCHZEITSPAKETE" products={hochzeitspakete} />
      <MarqueeBanner />
      <BlogSection />
      <ProductSection title="ECKSOFA-SÄTZE" products={ecksofas} />
      <TrustBadges />
      <MarqueeBanner />
    </main>
  );
};

export default HomePage;
