import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Trainers = () => {
  const [ref, isVisible] = useScrollAnimation();

  const trainers = [
    {
      initials: 'NS',
      name: 'Neha Sharma',
      specialty: 'Yoga & Flexibility',
      certification: 'ACE Certified',
      bio: 'Passionate about holistic wellness with 5+ years of experience in yoga and mindful movement.',
      color: 'from-primary to-primary-dark',
    },
    {
      initials: 'RP',
      name: 'Riya Patel',
      specialty: 'Zumba & Dance Fitness',
      certification: 'Zumba Licensed',
      bio: 'Energy-packed dance fitness instructor who makes every class feel like a celebration.',
      color: 'from-secondary to-primary',
    },
    {
      initials: 'AK',
      name: 'Aisha Khan',
      specialty: 'Strength & HIIT',
      certification: 'ISSA Certified',
      bio: 'Specializes in strength training and high-intensity workouts for maximum results.',
      color: 'from-primary-dark to-primary',
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Meet Your <span className="gradient-text">Trainers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map((trainer, idx) => (
            <div
              key={trainer.name}
              className="glass-card rounded-2xl p-6 md:p-8 text-center"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${trainer.color} mx-auto mb-5 flex items-center justify-center shadow-lg shadow-primary/20`}>
                <span className="text-white text-2xl font-extrabold font-[family-name:var(--font-heading)]">
                  {trainer.initials}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-1">
                {trainer.name}
              </h3>
              <p className="text-primary font-semibold text-sm mb-2">{trainer.specialty}</p>
              
              {/* Certification badge */}
              <span className="inline-block text-xs font-semibold text-secondary bg-secondary/15 px-3 py-1 rounded-full mb-4">
                ✓ {trainer.certification}
              </span>

              <p className="text-text-muted text-sm leading-relaxed">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
