import './ServiceDetailPage.scss';
import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { Button } from '@/components/ui/button';
import { findSubService, serviceCategories } from '@/lib/serviceData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { categoryIcons } from '@/lib/serviceIcons';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const result = slug ? findSubService(slug) : null;

  if (!result) {
    return (
      <Layout>
        <div className="service-not-found">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="global-button">Back to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const { category, subService } = result;

  const relatedServices = category.subServices.filter(s => s.slug !== slug);

  return (
    <Layout>
      <PageHero
        tagline={category.title}
        title={subService.title}
        description={subService.heroDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: category.title, href: `/#services` },
          { label: subService.title, href: `/services/${subService.slug}` },
        ]}
      />

      {/* Features Section */}
      <motion.section
        className="sd-features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        aria-labelledby="features-heading"
      >
        <motion.div className="sd-features-header" variants={fadeInUp}>
          <span className="section-label">What We Deliver</span>
          <h2 id="features-heading">Key Capabilities</h2>
        </motion.div>
        <div className="sd-features-grid">
          {subService.features.map((feat, i) => (
            <motion.div
              key={i}
              className="sd-feature-card"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="sd-feature-number">{String(i + 1).padStart(2, '0')}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="sd-benefits"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        aria-labelledby="benefits-heading"
      >
        <motion.div className="sd-benefits-content" variants={fadeInLeft}>
          <span className="section-label">Why Choose Us</span>
          <h2 id="benefits-heading">The Mach-A Advantage</h2>
          <ul className="sd-benefits-list">
            {subService.benefits.map((benefit, i) => (
              <motion.li key={i} variants={fadeInUp}>
                <CheckCircle className="benefit-icon" aria-hidden="true" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {subService.techStack && subService.techStack.length > 0 && (
          <motion.div className="sd-tech-stack" variants={fadeInRight}>
            <h3>Technology Stack</h3>
            <div className="sd-tech-tags">
              {subService.techStack.map((tech, i) => (
                <span key={i} className="sd-tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="sd-process"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        aria-labelledby="process-heading"
      >
        <motion.div className="sd-process-header" variants={fadeInUp}>
          <span className="section-label">Our Approach</span>
          <h2 id="process-heading">How We Work</h2>
        </motion.div>
        <ol className="sd-process-steps">
          {subService.process.map((step, i) => (
            <motion.li key={i} className="sd-process-step" variants={fadeInUp}>
              <div className="sd-step-number">{step.step}</div>
              <div className="sd-step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="sd-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="sd-cta-content" variants={fadeInUp}>
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how {subService.title} can transform your business operations.</p>
          <div className="sd-cta-buttons">
            <Link to="/contact">
              <Button className="global-button">Start Your Project</Button>
            </Link>
            <Link to="/case-studies">
              <Button className="sd-cta-secondary">View Case Studies</Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <motion.section
          className="sd-related"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          aria-labelledby="related-heading"
        >
          <motion.div className="sd-related-header" variants={fadeInUp}>
            <span className="section-label">Explore More</span>
            <h2 id="related-heading">Related Services</h2>
          </motion.div>
          <div className="sd-related-grid">
            {relatedServices.map((related) => (
              <motion.div key={related.slug} variants={fadeInUp}>
                <Link to={`/services/${related.slug}`} className="sd-related-card">
                  <h3>{related.title}</h3>
                  <p>{related.shortDesc}</p>
                  <span className="sd-related-link">
                    Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Other Categories */}
          <motion.div className="sd-other-categories" variants={fadeInUp}>
            <h3>Explore Other Service Areas</h3>
            <div className="sd-category-links">
              {serviceCategories
                .filter(cat => cat.slug !== category.slug)
                .map(cat => (
                  <Link
                    key={cat.slug}
                    to={`/services/${cat.subServices[0].slug}`}
                    className="sd-category-link"
                  >
                    <span className="sd-category-icon">{categoryIcons[cat.slug] ?? cat.icon}</span>
                    <span>{cat.title}</span>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.section>
      )}
    </Layout>
  );
}
