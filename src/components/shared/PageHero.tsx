import './PageHero.scss';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface PageHeroProps {
  tagline: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ tagline, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <motion.section
      className="page-hero"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="page-hero-glow" aria-hidden="true" />

      {breadcrumbs && breadcrumbs.length > 0 && (
        <motion.nav className="page-breadcrumbs" aria-label="Breadcrumb" variants={fadeInUp}>
          <ol>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href}>
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <a href={crumb.href}>{crumb.label}</a>
                    <span className="breadcrumb-sep" aria-hidden="true">/</span>
                  </>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>
      )}

      <motion.span className="section-label" variants={fadeInUp}>
        {tagline}
      </motion.span>
      <motion.h1 className="page-hero-title" variants={fadeInUp}>
        {title}
      </motion.h1>
      <motion.p className="page-hero-desc" variants={fadeInUp}>
        {description}
      </motion.p>
    </motion.section>
  );
}
