import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden mb-3">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
      >
        <span className="font-[family-name:var(--font-heading)] font-semibold text-white text-sm md:text-base pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5">
          <p className="text-text-muted text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Can beginners join?',
      answer: 'Absolutely! OFFFIT is designed for all fitness levels. Our trainers modify exercises for beginners and guide you step by step.',
    },
    {
      question: 'Is it suitable for PCOS/thyroid?',
      answer: 'Yes! We have specialized workout and diet plans tailored for women with PCOS, thyroid, and other hormonal conditions.',
    },
    {
      question: 'What if I miss a session?',
      answer: 'No worries! Every missed day gets extended to your plan. Plus, all sessions are recorded so you can workout anytime.',
    },
    {
      question: 'Are recordings available?',
      answer: 'Yes, every single live session is recorded and shared with you. You can access them anytime to workout at your convenience.',
    },
    {
      question: 'Do I need equipment?',
      answer: 'Not at all! All our workouts are designed for home with zero equipment. Just you, your mat, and your motivation.',
    },
    {
      question: 'Can moms join?',
      answer: 'Of course! Many of our members are moms. We have flexible timings and post-pregnancy specific workout plans.',
    },
    {
      question: 'Are timings flexible?',
      answer: 'Very flexible! Choose from morning (6 AM to 10 AM) or evening (5 PM to 10 PM) slots. Attend twice a day, any slot, any day.',
    },
    {
      question: 'How do extensions work?',
      answer: 'For every day you miss (travel, periods, emergencies), that day gets added back to your plan at no extra cost.',
    },
    {
      question: 'Are classes live or recorded?',
      answer: '100% live on Zoom! Our trainers interact with you in real-time, correct your form, and keep you motivated throughout.',
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Got Questions? <span className="gradient-text">We Have Answers.</span>
          </h2>
        </div>

        <div>
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
