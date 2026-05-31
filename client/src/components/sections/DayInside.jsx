import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const DayInside = () => {
  const [ref, isVisible] = useScrollAnimation();

  const steps = [
    {
      time: '6:00 AM',
      title: 'Morning Motivation',
      description: 'Wake up to positive affirmations and daily fitness tips in your WhatsApp group.',
    },
    {
      time: '7:00 AM',
      title: 'Live Workout Session',
      description: 'Join your batch for an energy-packed live class on Zoom with your trainer.',
    },
    {
      time: '12:00 PM',
      title: 'Diet Check-In',
      description: 'Log your meals and get real-time feedback from your assigned dietician.',
    },
    {
      time: '3:00 PM',
      title: 'Progress Tracking',
      description: 'Track your weight, measurements, and energy levels with our simple system.',
    },
    {
      time: '5:00 PM',
      title: 'Community Motivation',
      description: 'Share wins, challenges, and support each other in the community chat.',
    },
    {
      time: '7:00 PM',
      title: 'Evening Live Session',
      description: 'Can\'t do mornings? Join the evening batch for the same powerful workout.',
    },
  ];

  return (
    <section className="bg-light py-16 md:py-24">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-light mb-4">
            What Your Day <span className="gradient-text">Looks Like</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative flex gap-6 md:gap-8 items-start group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg md:text-xl">{idx + 1}</span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md shadow-black/5 border border-black/5 flex-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-light mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-light-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-text-light-muted italic mt-12 text-base md:text-lg font-medium">
          "You never feel alone in your fitness journey."
        </p>
      </div>
    </section>
  );
};

export default DayInside;
