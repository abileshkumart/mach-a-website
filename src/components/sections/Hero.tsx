import './Hero.scss';
import { motion } from 'framer-motion';
import Business from '@/assets/home/Business.svg';
import Meeting from '@/assets/home/meeting.svg';
import People from '@/assets/home/people.svg';
import PaperPlane from '@/assets/home/paper_plane.svg';
import { Button } from '@/components/ui/button';
import { fadeInLeft, staggerContainer, scaleIn, floatingAnimation } from '@/lib/animations';
import { scrollToId } from '@/hooks/useScrollToSection';
import GradientOrb from '@/components/shared/GradientOrb';
import { serviceCategories } from '@/lib/serviceData';
import { categoryIcons } from '@/lib/serviceIcons';

const serviceTagVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.8 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <GradientOrb className="orb-1" delay={0} />
      <GradientOrb className="orb-2" delay={2} />
      <GradientOrb className="orb-3" delay={4} />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p># WELCOME TO MACHINE_A</p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Empowering Growth Through Technology
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Mach-A helps you build smarter solutions, automate processes, and scale seamlessly with digital innovation. Together, we can unlock the full potential of your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button className="global-button" onClick={() => scrollToId('#contact-form')}>
              Let's Build Together
            </Button>
          </motion.div>

          {/* Service Tags */}
          <div className="hero-service-tags">
            {serviceCategories.map((cat, i) => (
              <motion.span
                key={cat.slug}
                className="hero-tag"
                custom={i}
                variants={serviceTagVariant}
                initial="hidden"
                animate="visible"
              >
                <span className="hero-tag-icon">{categoryIcons[cat.slug]}</span>
                {cat.title}
              </motion.span>
            ))}
          </div>

          <motion.img
            className="hero-paper-plane"
            src={PaperPlane}
            alt=""
            aria-hidden="true"
            animate={floatingAnimation}
          />
        </motion.div>

        <motion.div
          className="hero-image-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Play button icon */}
          <motion.div
            className="hero-icon hero-icon-play"
            aria-hidden="true"
            animate={{ x: [0, -12, 4, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#0D0B00" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M20 16L32 24L20 32V16Z" fill="#0D0B00" />
            </svg>
          </motion.div>

          {/* Top row */}
          <div className="hero-image-row-top">
            <motion.img
              className="hero-img hero-img-large"
              src={People}
              alt="Team collaboration in a modern workspace"
              variants={scaleIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            />
            <motion.img
              className="hero-img hero-img-medium hero-img-offset-down"
              src={Business}
              alt="Business strategy and planning session"
              variants={scaleIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            />
          </div>

          {/* Rewind icon */}
          <motion.div
            className="hero-icon hero-icon-rewind"
            aria-hidden="true"
            animate={{ x: [0, -18, 6, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1], repeatDelay: 0.8 }}
          >
            <div className="rewind-pill">
              <svg width="52" height="32" viewBox="0 0 52 32" fill="none">
                <path d="M14 8L4 16L14 24V8Z" fill="#FFFFFF" />
                <path d="M28 8L18 16L28 24V8Z" fill="#FFFFFF" />
                <path d="M40 8L30 16L40 24V8Z" fill="#FFFFFF" />
              </svg>
            </div>
          </motion.div>

          {/* Bottom row */}
          <div className="hero-image-row-bottom">
            <motion.img
              className="hero-img hero-img-medium"
              src={Meeting}
              alt="Professional team meeting and discussion"
              variants={scaleIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
