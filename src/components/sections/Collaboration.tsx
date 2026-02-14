import './Collaboration.scss';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '@/lib/animations';
import { collaborationPoints } from '@/lib/constants';
import { scrollToId } from '@/hooks/useScrollToSection';

export default function Collaboration() {
  return (
    <motion.section
      id="about"
      className="collaboration-section"
      aria-labelledby="collab-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="collab-header">
        <motion.div variants={fadeInLeft}>
          <span className="section-label">Collaborative</span>
          <h2 id="collab-heading" className="collab-title">
            Why Choose Mach-A as Your Partner?
          </h2>
        </motion.div>
        <motion.div className="collab-description" variants={fadeInRight}>
          <p>
            At Mach-A, we're more than service providers—we're your growth partners, committed to helping you innovate, scale, and succeed.
          </p>
          <div>
            <Button className="global-button" onClick={() => scrollToId('#services')}>
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div className="collab-points" variants={staggerContainer}>
        {collaborationPoints.map((point, i) => (
          <motion.div
            key={i}
            className="collab-point"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.span
              className="point-number"
              whileHover={{ scale: 1.2, color: '#FF9A00' }}
              transition={{ duration: 0.3 }}
            >
              {point.num}
            </motion.span>
            <h3 className="point-title">{point.title}</h3>
            <p className="point-desc">{point.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
