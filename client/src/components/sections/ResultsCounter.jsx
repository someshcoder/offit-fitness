import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

const StatItem = ({ end, suffix, label, isVisible, decimals = false }) => {
  const count = useCountUp(decimals ? end * 10 : end, 2500, isVisible);
  const displayValue = decimals ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <div className="text-center group">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
        {displayValue}
        <span className="text-primary/70">{suffix}</span>
      </div>
      <p className="text-text-light-muted text-sm sm:text-base font-medium">{label}</p>
    </div>
  );
};

const ResultsCounter = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const stats = [
    { end: 5000, suffix: '+', label: 'Happy Members' },
    { end: 10000, suffix: '+', label: 'Kgs Lost' },
    { end: 1000, suffix: '+', label: 'Transformations' },
    { end: 49, suffix: '', label: 'Star Rating', decimals: true },
  ];

  return (
    <section className="bg-light py-16 md:py-24">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsCounter;
