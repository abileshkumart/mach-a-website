import './HowItWorks.scss';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { processSteps } from '@/lib/constants';

const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stepVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.5, ease: cubicEase },
  }),
};

const numberVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.5 + 0.15, ease: 'backOut' as const },
  }),
};

const connectorVariant = {
  hidden: { scaleX: 0, scaleY: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    scaleY: 1,
    transition: { duration: 0.8, delay: i * 0.5 + 0.4, ease: cubicEase },
  }),
};

export default function HowItWorks() {
  return (
    <motion.section
      id="process"
      className="process-section"
      aria-labelledby="process-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="process-header" variants={fadeInUp}>
        <span className="section-label">Our Process</span>
        <h2 id="process-heading" className="process-title">
          How We Work With You
        </h2>
        <p className="process-subtitle">
          Our proven four-step process ensures every project is delivered with precision, transparency, and measurable impact.
        </p>
      </motion.div>

      <ol className="process-timeline">
        {processSteps.map((step, i) => (
          <motion.li
            key={i}
            className="process-step"
            custom={i}
            variants={stepVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="step-indicator">
              <motion.span
                className="step-number"
                custom={i}
                variants={numberVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {step.num}
              </motion.span>
              {i < processSteps.length - 1 && (
                <motion.div
                  className="step-connector"
                  custom={i}
                  variants={connectorVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
