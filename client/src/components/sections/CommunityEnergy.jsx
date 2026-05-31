import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CommunityEnergy = () => {
  const [ref, isVisible] = useScrollAnimation();

  const cards = [
    {
      icon: '🏆',
      title: 'Monthly Fitness Challenges',
      description: 'Compete, push yourself, and win exciting rewards every month.',
    },
    {
      icon: '🎉',
      title: 'Celebrate Transformations',
      description: 'We celebrate every milestone — big or small — together as a community.',
    },
    {
      icon: '✨',
      title: 'Daily Positivity & Motivation',
      description: 'Start every day with inspiring quotes, tips, and real success stories.',
    },
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
            Strong Women Support <span className="gradient-text">Strong Women</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 text-center"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-light mb-3">
                {card.title}
              </h3>
              <p className="text-text-light-muted text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-text-light-muted italic mt-10 text-base md:text-lg font-medium">
          "Strong women build strong confidence."
        </p>
      </div>
    </section>
  );
};

export default CommunityEnergy;
