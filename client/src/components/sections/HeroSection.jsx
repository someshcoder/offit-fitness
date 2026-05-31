import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { openWhatsApp } from '../../utils/whatsapp';

const HeroSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const trustPills = [
    { icon: '🍽️', label: 'Personalized Diet Plan' },
    { icon: '📞', label: '24/7 Dietician' },
    { icon: '👩', label: 'Women-Only' },
    { icon: '🌱', label: 'Beginner Friendly' },
    { icon: '⏰', label: 'Flexible Timings' },
    { icon: '💪', label: 'Real Trainers' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-dark overflow-hidden pt-20 md:pt-0"
    >
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow animate-glow-pulse" />

      {/* Abstract gradient shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary-dark/10 to-transparent blur-3xl animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-2xl" />

      {/* Decorative circles */}
      <div className="absolute top-1/3 right-[10%] hidden lg:block">
        <div className="relative">
          <div
            className="w-72 h-72 rounded-full border border-primary/20 animate-float"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="absolute inset-4 rounded-full border border-primary/15 animate-float"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute inset-8 rounded-full border border-primary/10 animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/10 animate-float"
            style={{ animationDelay: '0.5s' }}
          />

          {/* Small floating dots */}
          <div
            className="absolute -top-4 left-1/2 w-3 h-3 rounded-full bg-primary/60 animate-float"
            style={{ animationDelay: '1.5s' }}
          />
          <div
            className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-secondary/80 animate-float"
            style={{ animationDelay: '2.5s' }}
          />
          <div
            className="absolute -bottom-4 left-1/3 w-4 h-4 rounded-full bg-primary/40 animate-float"
            style={{ animationDelay: '0.8s' }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start md:justify-center min-h-screen pt-4 md:pt-0 pb-10 ${isVisible ? 'section-visible' : 'section-hidden'
          }`}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-secondary">
              Women-Only Live Fitness Community
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-tight mb-6 text-white">
            Join the <span className="gradient-text">30-Day</span> Weight Loss
            Challenge
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-text-muted mb-8 leading-relaxed max-w-xl">
            Lose 4–5 kg or get 50% money back. 100% live Zoom classes. Real
            trainers. Real results.
          </p>

          {/* Emotional line */}
          <p className="text-secondary/80 italic text-base mb-8 font-medium">
            "Become the best version of yourself."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={openWhatsApp}
              className="gradient-btn text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-primary/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Join Now on WhatsApp
            </button>

            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#pricing')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 text-center cursor-pointer"
            >
              See Pricing
            </a>
          </div>

          {/* Trust Pills - Updated */}
          {/* Trust Pills - Compact Version */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-lg">
            {trustPills.map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-base">{pill.icon}</span>
                <span className="text-xs text-white/80 font-medium leading-tight">
                  {pill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Urgency Bar */}
      <div className="relative z-10 bg-gradient-to-r from-primary to-primary-dark py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-semibold text-sm md:text-base flex items-center justify-center gap-2">
            <span className="animate-pulse">🔥</span>
            Limited Spots Available — Batch Filling Fast!
            <span className="animate-pulse">🔥</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;