import './Services.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { serviceCategories } from '@/lib/serviceData';
import { ArrowRight } from 'lucide-react';
import { categoryIcons } from '@/lib/serviceIcons';

export default function Services() {
  return (
    <motion.section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="services-glow" aria-hidden="true" />

      <motion.div className="services-header" variants={fadeInUp}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.span>
        <motion.h2 id="services-heading" className="services-title" variants={fadeInUp}>
          Explore Our Comprehensive Service Offerings
        </motion.h2>
        <motion.p className="services-subtitle" variants={fadeInUp}>
          At Mach-A, we provide a suite of innovative services designed to empower your business. Our solutions are tailored to meet your unique needs and drive growth.
        </motion.p>
      </motion.div>

      <motion.div
        className="services-categories-grid"
        role="group"
        aria-label="Our service categories"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {serviceCategories.map((cat) => (
          <motion.div
            key={cat.slug}
            className="service-category-card"
            variants={fadeInUp}
            whileHover={{
              y: -12,
              boxShadow: '0 20px 40px rgba(255, 116, 0, 0.15)',
              transition: { duration: 0.3 },
            }}
          >
            <div className="category-icon">
              {categoryIcons[cat.slug] ?? cat.icon}
            </div>
            <h3 className="category-title">{cat.title}</h3>
            <p className="category-desc">{cat.desc}</p>
            <ul className="category-services-list">
              {cat.subServices.map((sub) => (
                <li key={sub.slug}>
                  <Link to={`/services/${sub.slug}`} className="category-service-link">
                    {sub.title}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={`/services/${cat.subServices[0].slug}`}
              className="category-discover-btn"
            >
              Discover Now
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
