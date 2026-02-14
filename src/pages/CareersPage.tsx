import './CareersPage.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { Button } from '@/components/ui/button';
import { jobPositions } from '@/lib/serviceData';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { MapPin, Clock, Rocket, Heart, GraduationCap, Globe, ArrowRight } from 'lucide-react';

const perks = [
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the world with flexible hours that suit your lifestyle.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness programs to keep you at your best.' },
  { icon: GraduationCap, title: 'Learning Budget', desc: 'Annual budget for courses, conferences, and certifications to fuel your growth.' },
  { icon: Rocket, title: 'Growth Path', desc: 'Clear career progression with mentorship and leadership opportunities at every level.' },
];

const departments = ['All', ...Array.from(new Set(jobPositions.map(j => j.department)))];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');

  const filteredJobs = activeDept === 'All'
    ? jobPositions
    : jobPositions.filter(j => j.department === activeDept);

  return (
    <Layout>
      <PageHero
        tagline="Join Our Team"
        title="Build the Future With Us"
        description="We're looking for passionate technologists who want to make an impact. Join a team that values innovation, collaboration, and continuous growth."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
        ]}
      />

      {/* Why Mach-A */}
      <motion.section
        className="careers-perks"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        aria-labelledby="perks-heading"
      >
        <motion.div className="careers-perks-header" variants={fadeInUp}>
          <span className="section-label">Why Mach-A</span>
          <h2 id="perks-heading">Perks & Benefits</h2>
          <p>We believe happy teams build better products. Here's what we offer.</p>
        </motion.div>
        <div className="careers-perks-grid">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              className="careers-perk-card"
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="careers-perk-icon-wrapper">
                <perk.icon className="careers-perk-icon" aria-hidden="true" />
              </div>
              <h3>{perk.title}</h3>
              <p>{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        className="careers-positions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
        aria-labelledby="positions-heading"
      >
        <motion.div className="careers-positions-header" variants={fadeInUp}>
          <span className="section-label">Open Positions</span>
          <h2 id="positions-heading">Current Opportunities</h2>
          <p>We're growing fast and looking for talented individuals to join our team.</p>
        </motion.div>

        <motion.div className="careers-filters" variants={fadeInUp}>
          {departments.map((dept) => (
            <button
              key={dept}
              className={`careers-filter-btn ${activeDept === dept ? 'active' : ''}`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept}
            className="careers-positions-grid"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={staggerContainer}
          >
            {filteredJobs.map((job, i) => (
              <motion.div
                key={`${job.title}-${i}`}
                className="careers-job-card"
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="careers-job-department">{job.department}</div>
                <h3>{job.title}</h3>
                <p className="careers-job-desc">{job.desc}</p>
                <div className="careers-job-meta">
                  <span><MapPin className="meta-icon" aria-hidden="true" />{job.location}</span>
                  <span><Clock className="meta-icon" aria-hidden="true" />{job.type}</span>
                </div>
                <Link to="/contact" className="careers-apply-link">
                  Apply Now <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="careers-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="careers-cta-content" variants={fadeInUp}>
          <h2>Don't See Your Role?</h2>
          <p>We're always looking for exceptional talent. Send us your resume and tell us how you'd contribute to Mach-A.</p>
          <Link to="/contact">
            <Button className="global-button">Send Your Resume</Button>
          </Link>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
