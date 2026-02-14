export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

export interface TechFeature {
  number: string;
  label: string;
}

export interface CollaborationPoint {
  num: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface SubService {
  slug: string;
  title: string;
  shortDesc: string;
  heroTagline: string;
  heroDescription: string;
  features: { title: string; desc: string }[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  techStack?: string[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  subServices: SubService[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  desc: string;
}

export interface NavItemWithChildren {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}
