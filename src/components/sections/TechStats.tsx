import './TechStats.scss';
import { motion } from 'framer-motion';
import ProductivityImage from '@/assets/tech/Productivity Image.svg';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, scaleIn, glowPulse } from '@/lib/animations';
import { techFeatures } from '@/lib/constants';

export default function TechStats() {
  return (
    <motion.section
      className="tech-section"
      aria-labelledby="tech-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="tech-gradient-mesh" aria-hidden="true" />

      <div className="tech-content">
        <motion.div className="tech-image-col" variants={fadeInLeft}>
          <motion.img
            src={ProductivityImage}
            alt="Visual representation of technology and productivity metrics"
            className="tech-hero-image"
            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            loading="lazy"
          />
        </motion.div>

        <motion.div className="tech-info-col" variants={fadeInRight}>
          <motion.span className="section-label" variants={fadeInUp}>Technology</motion.span>
          <motion.h2 id="tech-heading" className="tech-title" variants={fadeInUp}>
            Driving Results with Smart Solutions
          </motion.h2>
          <motion.p className="tech-description" variants={fadeInUp}>
            Our solutions go beyond code. We combine cutting-edge technology with deep industry insight to deliver measurable outcomes. From scalable cloud architectures to intelligent AI systems, every solution is built for impact.
          </motion.p>

          <motion.div className="tech-stats-grid" variants={staggerContainer}>
            {techFeatures.map((feat, i) => (
              <motion.div
                key={i}
                className="tech-stat-card"
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  boxShadow: '0 15px 40px rgba(255, 116, 0, 0.2)',
                  transition: { duration: 0.3 },
                }}
              >
                <motion.p className="stat-number" animate={glowPulse}>
                  {feat.number}
                </motion.p>
                <p className="stat-label">{feat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
