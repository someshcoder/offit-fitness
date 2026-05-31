import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FitnessGoals = () => {
  const [ref, isVisible] = useScrollAnimation();

  const goals = [
    {
      icon: '🔥',
      title: 'Belly & Thigh Fat Loss',
      description: 'Targeted workouts designed to tone and shape your problem areas effectively.',
    },
    {
      icon: '⚖️',
      title: 'Weight Loss (Any Condition)',
      description: 'Safe, sustainable weight loss programs for PCOS, thyroid, and more.',
    },
    {
      icon: '🤰',
      title: 'Post Pregnancy Fitness',
      description: 'Gentle yet effective routines to regain your strength and confidence.',
    },
    {
      icon: '🧘',
      title: 'Flexibility & Wellbeing',
      description: 'Improve mobility, reduce stress, and feel energized every day.',
    },
    {
      icon: '💜',
      title: 'PCOS & Thyroid Support',
      description: 'Specialized workouts and diet plans tailored for hormonal health.',
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            We Help You Reach Your <span className="gradient-text">Goal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, idx) => (
            <div
              key={goal.title}
              className={`glass-card rounded-2xl p-6 md:p-8 ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-4">{goal.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-2">
                {goal.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary/70 italic mt-10 text-base md:text-lg font-medium">
          "No crash diets. No shortcuts. Just sustainable transformation."
        </p>
      </div>
    </section>
  );
};

export default FitnessGoals;
