import './CTA.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import GradientOrb from '@/components/shared/GradientOrb';

export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="cta-section"
      aria-labelledby="cta-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <GradientOrb className="orb-cta-1" delay={1} />
      <GradientOrb className="orb-cta-2" delay={3} />

      <motion.div className="cta-content" variants={fadeInUp}>
        <motion.span className="section-label" variants={fadeInUp}>
          Get Started
        </motion.span>
        <motion.h2 id="cta-heading" className="cta-title" variants={fadeInUp}>
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p className="cta-description" variants={fadeInUp}>
          Let's build something extraordinary together. Partner with Mach-A and unlock the full potential of technology for your business growth.
        </motion.p>
        <motion.div className="cta-buttons" variants={staggerContainer}>
          <motion.div variants={scaleIn}>
            <Link to="/contact">
              <Button className="global-button cta-primary-btn">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact">
              <Button className="cta-secondary-btn">
                Schedule a Call
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
