import './Mission.scss';
import { motion } from 'framer-motion';
import Quote from '@/assets/home/Quote.svg';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

export default function Mission() {
  return (
    <motion.section
      className="mission-section"
      aria-labelledby="mission-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="mission-gradient-bg" aria-hidden="true" />

      <motion.div className="mission-title-block" variants={fadeInLeft}>
        <h2 id="mission-heading" className="mission-title">
          <span>OUR</span>
          <span>MISSION</span>
        </h2>
      </motion.div>

      <motion.div className="mission-content" variants={fadeInRight}>
        <motion.img
          src={Quote}
          alt=""
          aria-hidden="true"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="mission-quote-icon"
        />
        <motion.p
          className="mission-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At Mach-A, our mission is to democratize technology for every business. We believe that innovation shouldn't be a privilege—it should be a tool accessible to all. We're committed to building solutions that transform possibilities into realities, empowering growth at every stage.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
