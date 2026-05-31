import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Transformations = () => {
  const [ref, isVisible] = useScrollAnimation();

  const transformations = [
    { name: 'Priya S.', kgLost: 8, weeks: 6, quote: 'OFFFIT changed my life completely!' },
    { name: 'Anjali M.', kgLost: 12, weeks: 10, quote: 'I never thought I could feel this confident.' },
    { name: 'Sneha R.', kgLost: 5, weeks: 4, quote: 'The community kept me going every single day.' },
    { name: 'Kavita D.', kgLost: 15, weeks: 12, quote: 'From PCOS struggle to fitness inspiration.' },
    { name: 'Ritu K.', kgLost: 7, weeks: 5, quote: 'Post-pregnancy body transformation was incredible.' },
    { name: 'Meera P.', kgLost: 10, weeks: 8, quote: 'Best investment I ever made in myself.' },
  ];

  return (
    <section id="results" className="bg-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Real Women. <span className="gradient-text">Real Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((t, idx) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Before/After gradient placeholder */}
              <div className="h-48 relative">
                <div className="absolute inset-0 flex">
                  {/* Before */}
                  <div className="w-1/2 bg-gradient-to-br from-gray-500/30 to-gray-600/20 flex items-center justify-center">
                    <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Before</span>
                  </div>
                  {/* Divider */}
                  <div className="w-0.5 bg-primary/60 relative z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </div>
                  {/* After */}
                  <div className="w-1/2 bg-gradient-to-br from-primary/20 to-secondary/15 flex items-center justify-center">
                    <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">After</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-white">{t.name}</h3>
                  <span className="text-xs font-semibold text-primary bg-primary/15 px-3 py-1 rounded-full">
                    -{t.kgLost} kg
                  </span>
                </div>
                <p className="text-text-muted text-xs mb-2">in {t.weeks} weeks</p>
                <p className="text-secondary/80 text-sm italic">"{t.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary/70 italic mt-10 text-base md:text-lg font-medium">
          "Your story starts now."
        </p>
      </div>
    </section>
  );
};

export default Transformations;
