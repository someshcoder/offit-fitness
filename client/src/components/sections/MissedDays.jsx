import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const MissedDays = () => {
  const [ref, isVisible] = useScrollAnimation();

  const cards = [
    {
      icon: '📅',
      title: 'Missed Day Extensions',
      description: 'Every missed day gets added back to your plan. You never lose a single day.',
    },
    {
      icon: '✈️',
      title: 'Travel Days Covered',
      description: 'Going on vacation? No problem. Your days are safely extended.',
    },
    {
      icon: '💕',
      title: 'Period Days Covered',
      description: 'We understand your body. Take rest days and your plan adjusts automatically.',
    },
    {
      icon: '🎥',
      title: 'Session Recordings',
      description: 'Every live session is recorded. Watch and workout anytime you want.',
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Life Happens. <span className="gradient-text">We've Got You Covered.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-6 md:p-8"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary/70 italic mt-10 text-base md:text-lg font-medium">
          "We understand real life happens."
        </p>
      </div>
    </section>
  );
};

export default MissedDays;
