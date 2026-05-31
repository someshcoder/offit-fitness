import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { openWhatsApp } from '../../utils/whatsapp';

const PersonalTrainer = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    'One-on-One Live Sessions',
    'Custom Workout Plan',
    'Personal Diet Plan',
    'Daily Monitoring',
    'Live Form Correction',
    'Priority Support',
    'Goal-Based Coaching',
  ];

  return (
    <section className="bg-surface py-16 md:py-24 relative overflow-hidden border-t-4 border-primary">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-dark/5" />
      
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-primary bg-primary/15 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Premium
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Your Own Trainer. <span className="gradient-text">Your Own Journey.</span>
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-lg text-text-muted">Rs</span>
              <span className="text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-white">
                8,000
              </span>
              <span className="text-text-muted">/ month</span>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={openWhatsApp}
              className="gradient-btn text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg shadow-primary/40 cursor-pointer"
            >
              Book Personal Training
            </button>
          </div>
        </div>

        <p className="text-center text-secondary/70 italic mt-10 text-base md:text-lg font-medium">
          "Your own trainer. Your own transformation journey."
        </p>
      </div>
    </section>
  );
};

export default PersonalTrainer;
