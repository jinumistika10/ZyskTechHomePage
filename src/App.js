import React from 'react';
import Header from './components/Header';
import SocialProofSection from './components/SocialProofSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQPage from './components/FAQPage';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App(){
  return(
    <div>
        <Header />
        <SocialProofSection />
        <Features />
        <Testimonials />
        <FAQPage />
        <BlogSection />
        <Footer />
    </div>
  );
};

export default App;