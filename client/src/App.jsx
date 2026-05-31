import './index.css';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import ResultsCounter from './components/sections/ResultsCounter';
import FitnessGoals from './components/sections/FitnessGoals';
import ProgramStructure from './components/sections/ProgramStructure';
import CommunityBatch from './components/sections/CommunityBatch';
import DayInside from './components/sections/DayInside';
import DietSupport from './components/sections/DietSupport';
import FlexibleTimings from './components/sections/FlexibleTimings';
import MissedDays from './components/sections/MissedDays';
import Accountability from './components/sections/Accountability';
import PricingSection from './components/sections/PricingSection';
import PersonalTrainer from './components/sections/PersonalTrainer';
import CommunityEnergy from './components/sections/CommunityEnergy';
import Transformations from './components/sections/Transformations';
import VideoTestimonials from './components/sections/VideoTestimonials';
import Trainers from './components/sections/Trainers';
import WhatMakesDifferent from './components/sections/WhatMakesDifferent';
import TrustBadges from './components/sections/TrustBadges';
import HowItWorks from './components/sections/HowItWorks';
import FAQSection from './components/sections/FAQSection';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import FloatingWhatsApp from './components/sections/FloatingWhatsApp';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ResultsCounter />
        <FitnessGoals />
        <ProgramStructure />
        <CommunityBatch />
        <DayInside />
        <DietSupport />
        <FlexibleTimings />
        <MissedDays />
        <Accountability />
        <PricingSection />
        <PersonalTrainer />
        <CommunityEnergy />
        <Transformations />
        <VideoTestimonials />
        <Trainers />
        <WhatMakesDifferent />
        <TrustBadges />
        <HowItWorks />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
