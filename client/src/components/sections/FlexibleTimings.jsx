import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FlexibleTimings = () => {
  const [ref, isVisible] = useScrollAnimation();

  const morningSlots = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM'];
  const eveningSlots = ['5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
  const tags = ['Students', 'Working Women', 'Homemakers', 'Moms'];

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
            Choose Your Perfect <span className="gradient-text">Time Slot</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Morning */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌅</span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-light">
                Morning Slots
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {morningSlots.map((slot) => (
                <span
                  key={slot}
                  className="px-5 py-2.5 rounded-full border-2 border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default"
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>

          {/* Evening */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌙</span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-light">
                Evening Slots
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {eveningSlots.map((slot) => (
                <span
                  key={slot}
                  className="px-5 py-2.5 rounded-full border-2 border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default"
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-text-light font-semibold text-lg mb-6">
          Attend twice a day. Any slot. Any day.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full bg-secondary/30 text-primary font-semibold text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexibleTimings;
