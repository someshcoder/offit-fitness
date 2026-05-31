import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const HowItWorks = () => {
  const [ref, isVisible] = useScrollAnimation();

  const steps = [
    { number: '01', title: 'Join Your Batch', icon: '📲' },
    { number: '02', title: 'Get Diet Plan', icon: '🍎' },
    { number: '03', title: 'Attend Live Sessions', icon: '💻' },
    { number: '04', title: 'Track Progress', icon: '📊' },
    { number: '05', title: 'Transform', icon: '🦋' },
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
            Getting Started Is <span className="gradient-text">Simple</span>
          </h2>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex items-center gap-4 flex-1">
              <div className="flex flex-col items-center text-center flex-1 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-3xl mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-primary/60 mb-1">{step.number}</span>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-light text-sm">
                  {step.title}
                </h3>
              </div>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <svg className="w-8 h-8 text-primary/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-primary/20">
                {step.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-primary/60">{step.number}</span>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-light">
                  {step.title}
                </h3>
              </div>
              {idx < steps.length - 1 && (
                <svg className="w-5 h-5 text-primary/30 ml-auto rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
