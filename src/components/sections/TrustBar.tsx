import './TrustBar.scss';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const partners = [
  'NovaTech',
  'Apex Industries',
  'GreenLeaf',
  'CloudSync',
  'DataPrime',
  'FutureScale',
];

export default function TrustBar() {
  return (
    <motion.section
      className="trust-bar"
      aria-label="Trusted by leading companies"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer}
    >
      <motion.p className="trust-label" variants={fadeInUp}>
        Trusted by innovative companies
      </motion.p>
      <motion.div className="trust-logos" variants={staggerContainer}>
        {partners.map((name, i) => (
          <motion.div
            key={i}
            className="trust-logo-placeholder"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, opacity: 1 }}
          >
            <span>{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
