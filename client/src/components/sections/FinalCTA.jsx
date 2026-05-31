import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { openWhatsApp } from '../../utils/whatsapp';

const FinalCTA = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary" />
      
      {/* Shimmer animation */}
      <div 
        className="absolute inset-0 animate-shimmer opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Your Transformation Starts Today
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Stop waiting for the perfect moment — start now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openWhatsApp}
            className="bg-white text-primary font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Join Challenge
          </button>
          <button
            onClick={openWhatsApp}
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
          >
            Start Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
