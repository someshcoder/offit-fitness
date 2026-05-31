import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProgramStructure = () => {
  const [ref, isVisible] = useScrollAnimation();

  const programs = [
    {
      icon: '💃',
      title: 'Cardio / Zumba',
      days: '3 Days / Week',
      description: 'High-energy dance-based cardio sessions that make sweating fun.',
      gradient: 'from-primary/20 to-primary-dark/10',
    },
    {
      icon: '🏋️',
      title: 'Strength Training',
      days: '2 Days / Week',
      description: 'Build lean muscle and boost metabolism with guided resistance training.',
      gradient: 'from-secondary/20 to-primary/10',
    },
    {
      icon: '🧘',
      title: 'Yoga',
      days: '2 Days / Week',
      description: 'Improve flexibility, balance, and mental clarity with calming yoga flows.',
      gradient: 'from-primary/15 to-secondary/10',
    },
  ];

  const activities = [
    'Dance Fitness', 'HIIT Fat Burn', 'Aerobics', 'Stretching', 'Core Workouts',
    'Challenge Sessions', 'Full Body Burn', 'Flexibility', 'Low Impact', 'Mood Boosting Dance',
  ];

  return (
    <section id="program" className="bg-light py-16 md:py-24">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-light mb-4">
            Your 7-Day Live <span className="gradient-text">Fitness Schedule</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, idx) => (
            <div
              key={program.title}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-400 hover:-translate-y-2`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-3xl mb-5`}>
                {program.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-light mb-1">
                {program.title}
              </h3>
              <p className="text-primary font-semibold text-sm mb-3">{program.days}</p>
              <p className="text-text-light-muted text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Activity Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {activities.map((activity) => (
            <span
              key={activity}
              className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
            >
              {activity}
            </span>
          ))}
        </div>

        <p className="text-center text-text-light-muted italic text-base md:text-lg font-medium">
          "Fitness should feel exciting — not stressful."
        </p>
      </div>
    </section>
  );
};

export default ProgramStructure;
