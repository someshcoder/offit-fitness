import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WhatMakesDifferent = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    { icon: '👩', label: 'Women-Only Community' },
    { icon: '📹', label: '100% Live Classes' },
    { icon: '💰', label: 'Affordable Plans' },
    { icon: '🏠', label: 'Home Workouts' },
    { icon: '⏰', label: 'Flexible Timings' },
    { icon: '🎯', label: 'Personalized Support' },
    { icon: '👩‍🏫', label: 'Female Trainers' },
    { icon: '🎥', label: 'Recording Access' },
    { icon: '📅', label: 'Missed Day Extensions' },
  ];

  return (
    <section className="bg-light py-16 md:py-24">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-light mb-4">
            Why OFFFIT Beats <span className="gradient-text">Every Other Fitness App</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <div
              key={feature.label}
              className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-black/5 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                {feature.icon}
              </div>
              <span className="font-[family-name:var(--font-heading)] font-semibold text-text-light text-sm">
                {feature.label}
              </span>
              <svg className="w-5 h-5 text-primary ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>

        <p className="text-center text-text-light-muted italic mt-10 text-base md:text-lg font-medium">
          "Fitness that fits your lifestyle."
        </p>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
