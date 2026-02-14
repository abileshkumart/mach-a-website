import './FAQ.scss';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { faqItems } from '@/lib/constants';

export default function FAQ() {
  return (
    <motion.section
      className="faq-section"
      aria-labelledby="faq-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div className="faq-header" variants={fadeInUp}>
        <span className="section-label">FAQ</span>
        <h2 id="faq-heading" className="faq-title">
          Frequently Asked Questions
        </h2>
        <p className="faq-subtitle">
          Find answers to common questions about our services, process, and partnership approach.
        </p>
      </motion.div>

      <motion.div className="faq-content" variants={fadeInUp}>
        <Accordion type="single" collapsible className="faq-accordion">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="faq-item">
              <AccordionTrigger className="faq-question">
                <h3>{item.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="faq-answer">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
