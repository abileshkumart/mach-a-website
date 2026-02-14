import './AboutPage.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { Button } from '@/components/ui/button';
import { serviceCategories } from '@/lib/serviceData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '@/lib/animations';
import { Target, Users, Lightbulb, Shield, ArrowRight } from 'lucide-react';
import { categoryIcons } from '@/lib/serviceIcons';

const coreValues = [
  { icon: Target, title: 'Results-Driven', desc: 'Every solution we build is measured by the business impact it delivers for our clients.' },
  { icon: Users, title: 'True Partnership', desc: 'We work alongside you as an extension of your team, not as a distant vendor.' },
  { icon: Lightbulb, title: 'Innovation First', desc: 'We embrace emerging technologies to deliver solutions that give you a competitive edge.' },
  { icon: Shield, title: 'Quality & Trust', desc: 'Rigorous standards, transparent communication, and unwavering commitment to excellence.' },
];

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        tagline="About Mach-A"
        title="Empowering Growth Through Technology"
        description="We're a team of technologists, strategists, and problem-solvers dedicated to helping businesses harness the full potential of digital transformation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* Story Section */}
      <motion.section
        className="about-story"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        aria-labelledby="story-heading"
      >
        <motion.div className="about-story-text" variants={fadeInLeft}>
          <span className="section-label">Our Story</span>
          <h2 id="story-heading">Built by Engineers, Driven by Purpose</h2>
          <p>
            Founded in 2024, Mach-A was born from a simple belief: technology should work for your business, not the other way around. We saw too many companies struggling with fragmented systems, missed opportunities, and solutions that didn't match their ambitions.
          </p>
          <p>
            In just two years, we've built a reputation for delivering end-to-end digital solutions — from custom software and mobile applications to data analytics, digital marketing, and recruitment. Every project we take on is a partnership, and every solution is built to create measurable impact.
          </p>
        </motion.div>
        <motion.div className="about-story-stats" variants={fadeInRight}>
          <div className="about-stat">
            <span className="about-stat-number">10+</span>
            <span className="about-stat-label">Projects Delivered</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">2+</span>
            <span className="about-stat-label">Years of Growth</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">100%</span>
            <span className="about-stat-label">Client Satisfaction</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">4</span>
            <span className="about-stat-label">Service Verticals</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="about-values"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        aria-labelledby="values-heading"
      >
        <motion.div className="about-values-header" variants={fadeInUp}>
          <span className="section-label">What Guides Us</span>
          <h2 id="values-heading">Our Core Values</h2>
        </motion.div>
        <div className="about-values-grid">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              className="about-value-card"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <value.icon className="about-value-icon" aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What We Do — Services Overview */}
      <motion.section
        className="about-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        aria-labelledby="about-services-heading"
      >
        <motion.div className="about-services-header" variants={fadeInUp}>
          <span className="section-label">What We Do</span>
          <h2 id="about-services-heading">Comprehensive Solutions for Modern Businesses</h2>
          <p>From building custom software to growing your brand online, we cover every angle of your digital journey.</p>
        </motion.div>
        <div className="about-services-grid">
          {serviceCategories.map((cat) => (
            <motion.div
              key={cat.slug}
              className="about-service-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="about-service-icon">{categoryIcons[cat.slug] ?? cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <ul className="about-service-list">
                {cat.subServices.map((sub) => (
                  <li key={sub.slug}>{sub.title}</li>
                ))}
              </ul>
              <Link to={`/services/${cat.subServices[0].slug}`} className="about-service-link">
                Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="about-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="about-cta-content" variants={fadeInUp}>
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how Mach-A can help your business achieve its technology goals.</p>
          <div className="about-cta-buttons">
            <Link to="/contact">
              <Button className="global-button">Get In Touch</Button>
            </Link>
            <Link to="/#services">
              <Button className="sd-cta-secondary">Explore Services</Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
