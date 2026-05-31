import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const DietSupport = () => {
  const [ref, isVisible] = useScrollAnimation();

  const cards = [
    {
      icon: '👩‍⚕️',
      title: 'Certified Female Dietician',
      description: 'Get guidance from qualified female nutritionists who understand your body.',
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Reach out anytime — our support team is always available on WhatsApp.',
    },
    {
      icon: '🍛',
      title: 'Customized Indian Meal Plans',
      description: 'Delicious, easy-to-follow meal plans with foods you already love.',
    },
  ];

  const trustList = [
    'No starvation',
    'No crash diets',
    'Easy daily guidance',
    'Healthy sustainable habits',
  ];

  return (
    <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Personalized Nutrition, <span className="gradient-text">Built for You</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-6 md:p-8 text-center"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Trust List */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {trustList.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-text-muted"
            >
              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary/70 italic text-base md:text-lg font-medium">
          "Food is fuel — not punishment."
        </p>
      </div>
    </section>
  );
};

export default DietSupport;
