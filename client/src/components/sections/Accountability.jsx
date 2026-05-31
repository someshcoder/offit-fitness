import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Accountability = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    { icon: '🔔', title: 'Daily Reminders', description: 'Never miss a workout with smart daily notifications.' },
    { icon: '📈', title: 'Progress Tracking', description: 'Track your transformation week by week.' },
    { icon: '✅', title: 'Live Form Correction', description: 'Trainers correct your form in real-time during class.' },
    { icon: '💬', title: 'WhatsApp Community', description: 'Stay connected with your batch members 24/7.' },
    { icon: '🏋️', title: 'Trainer Guidance', description: 'Get expert tips and modifications for your level.' },
    { icon: '🎯', title: 'Accountability System', description: 'Daily check-ins that keep you motivated and consistent.' },
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
            Daily Support That Keeps You <span className="gradient-text">Consistent</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-md shadow-black/5 border border-black/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-text-light mb-2">
                {feature.title}
              </h3>
              <p className="text-text-light-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-text-light-muted italic mt-10 text-base md:text-lg font-medium">
          "Consistency over perfection."
        </p>
      </div>
    </section>
  );
};

export default Accountability;
