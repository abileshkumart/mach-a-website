import './Testimonials.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { testimonials } from '@/lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <motion.section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div className="testimonials-header" variants={fadeInUp}>
        <span className="section-label">Testimonials</span>
        <h2 id="testimonials-heading" className="testimonials-title">
          What Our Clients Say
        </h2>
      </motion.div>

      <motion.div
        className="testimonial-carousel"
        role="region"
        aria-label="Client testimonials"
        aria-roledescription="carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        variants={fadeInUp}
      >
        <button
          className="carousel-btn carousel-btn-prev"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="carousel-track">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <p className="testimonial-quote">"{testimonials[current].quote}"</p>
              <footer className="testimonial-attribution">
                <cite className="testimonial-name">{testimonials[current].name}</cite>
                <span className="testimonial-role">
                  {testimonials[current].title}, {testimonials[current].company}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <button
          className="carousel-btn carousel-btn-next"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>

      <div className="carousel-dots" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
