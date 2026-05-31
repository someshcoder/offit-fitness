import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const VideoTestimonials = () => {
  const [ref, isVisible] = useScrollAnimation();

  const testimonials = [
    {
      name: 'Ananya G.',
      rating: 5,
      review: 'OFFFIT is the best thing that happened to my fitness journey. The trainers are so supportive and the diet plan is so easy to follow!',
    },
    {
      name: 'Deepika S.',
      rating: 5,
      review: 'I lost 6 kgs in just one month! The community keeps you accountable and the live classes are so much fun.',
    },
    {
      name: 'Pooja T.',
      rating: 5,
      review: 'As a working mom, flexible timings are a lifesaver. I attend both morning and evening sessions. Absolutely love it!',
    },
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
            Hear It From <span className="gradient-text">Our Members</span>
          </h2>
        </div>

        {/* YouTube Video */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/G_r6NLSRXTk"
              title="OFFFIT Member Testimonials"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-text-light-muted text-sm leading-relaxed mb-4 italic">
                "{t.review}"
              </p>

              <p className="font-[family-name:var(--font-heading)] font-bold text-text-light text-sm">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
