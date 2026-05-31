import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { openWhatsApp } from '../../utils/whatsapp';

const PricingSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const plans = [
    { price: '999', duration: '1 Month', bonus: '', popular: false },
    { price: '1,199', duration: '5 Weeks', bonus: '+5 Days', popular: false },
    { price: '1,599', duration: '2 Months', bonus: '+10 Days', popular: true },
    { price: '2,199', duration: '3 Months', bonus: '+20 Days', popular: false },
    { price: '2,999', duration: '4 Months', bonus: '+30 Days', popular: false },
  ];

  const includes = [
    'Live Zoom Classes',
    'Women-Only Community',
    'Diet Support',
    'Flexible Timings',
    'Recordings',
    'Extensions',
  ];

  return (
    <section id="pricing" className="bg-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Simple, <span className="gradient-text">Affordable</span> Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.duration}
              className={`relative rounded-2xl p-6 md:p-7 transition-all duration-400 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary/20 to-surface border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10'
                  : 'glass-card'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Price */}
              <div className="text-center mb-5">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-text-muted">Rs</span>
                  <span className="text-4xl font-extrabold font-[family-name:var(--font-heading)] text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-white font-semibold mt-1">{plan.duration}</p>
                {plan.bonus && (
                  <span className="inline-block mt-2 text-xs font-semibold text-primary bg-primary/15 px-3 py-1 rounded-full">
                    {plan.bonus} FREE
                  </span>
                )}
              </div>

              {/* Includes */}
              <div className="space-y-2.5 mb-6">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-muted text-xs">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={openWhatsApp}
                className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'gradient-btn text-white shadow-lg shadow-primary/40'
                    : 'border-2 border-primary/50 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Join on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
