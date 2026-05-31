import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TrustBadges = () => {
  const [ref, isVisible] = useScrollAnimation();

  const badges = [
    { icon: '👩', label: 'Women Only' },
    { icon: '🛡️', label: 'Safe Environment' },
    { icon: '🎓', label: 'Certified Trainers' },
    { icon: '⏰', label: 'Flexible Timings' },
    { icon: '📹', label: 'Live Sessions' },
    { icon: '🎯', label: 'Personalized Support' },
    { icon: '🌱', label: 'Beginner Friendly' },
  ];

  return (
    <section className="bg-dark py-12 md:py-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 justify-start lg:justify-center">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 glass-card rounded-full px-5 py-3 whitespace-nowrap flex-shrink-0"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-white/90 font-semibold text-sm">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
