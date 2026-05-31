import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CommunityBatch = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: '🎯',
      title: 'Live Motivation',
      description: 'Get real-time encouragement and energy from trainers and fellow members during every session.',
    },
    {
      icon: '📊',
      title: 'Accountability System',
      description: 'Daily check-ins and progress tracking keep you on track towards your goals.',
    },
    {
      icon: '🤝',
      title: 'Friendly Trainers',
      description: 'Our certified female trainers create a warm, supportive environment where you thrive.',
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            You're Never Working Out <span className="gradient-text">Alone</span>
          </h2>
          <p className="text-xl text-text-muted font-medium mt-4">
            Each batch: <span className="text-primary font-bold">15–25 women</span>, live, together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 md:p-8 text-center"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary/70 italic mt-10 text-base md:text-lg font-medium">
          "Not just workouts — it's a supportive fitness family."
        </p>
      </div>
    </section>
  );
};

export default CommunityBatch;
