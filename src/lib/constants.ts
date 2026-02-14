import type { NavItem, SocialLink, TechFeature, CollaborationPoint, Testimonial, FAQItem, ProcessStep } from '@/types';

import uiux from '@/assets/service/uiux.svg';
import shop from '@/assets/service/shop.svg';
import automation from '@/assets/service/automation.svg';
import cloud from '@/assets/service/cloud.svg';
import AIIcon from '@/assets/service/AIIcon.svg';
import fb from '@/assets/footer/fb.svg';
import insta from '@/assets/footer/insta.svg';
import linkedIn from '@/assets/footer/linkedIN.svg';
import twitter from '@/assets/footer/twitter.svg';
import utube from '@/assets/footer/utube.svg';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Our Services', href: '#services' },
  { label: 'Contact', href: '#contact-form' },
];

export const services = [
  { img: uiux, title: 'UX/UI Design', desc: 'Create engaging user experiences with our expert design and development services.' },
  { img: shop, title: 'E-Commerce Development', desc: 'Launch your online store with our comprehensive e-commerce development solutions.' },
  { img: automation, title: 'Business Automation', desc: 'Streamline operations and enhance efficiency with our tailored automation solutions.' },
  { img: cloud, title: 'ERP & Cloud Solutions', desc: 'Transform your business processes with our robust ERP and cloud-based solutions.' },
  { img: AIIcon, title: 'AI Automation', desc: 'Leverage artificial intelligence to automate workflows and unlock new efficiencies.' },
];

export const socialLinks: SocialLink[] = [
  { src: fb, alt: 'Facebook', href: '#' },
  { src: insta, alt: 'Instagram', href: '#' },
  { src: twitter, alt: 'Twitter', href: '#' },
  { src: linkedIn, alt: 'LinkedIn', href: '#' },
  { src: utube, alt: 'YouTube', href: '#' },
];

export const techFeatures: TechFeature[] = [
  { number: '10+', label: 'Projects Delivered' },
  { number: '2+', label: 'Years of Growth' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];

export const collaborationPoints: CollaborationPoint[] = [
  { num: '01', title: 'End-to-End Solutions', desc: 'From web to AI, we deliver everything you need\u2014customized and end-to-end.' },
  { num: '02', title: 'True Partnership', desc: 'We work with you, not just for you\u2014every step of the way.' },
  { num: '03', title: 'Future-Ready Tech', desc: 'We build smart, scalable solutions that drive real growth.' },
];

export const processSteps: ProcessStep[] = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We dive deep into your business goals, challenges, and opportunities to create a tailored roadmap.' },
  { num: '02', title: 'Design & Prototype', desc: 'Our team crafts intuitive designs and interactive prototypes that bring your vision to life.' },
  { num: '03', title: 'Development & Testing', desc: 'We build robust, scalable solutions with rigorous quality assurance at every stage.' },
  { num: '04', title: 'Launch & Support', desc: 'We ensure a smooth deployment and provide ongoing support to keep your systems running optimally.' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Mach-A transformed our outdated systems into a streamlined digital powerhouse. Their team understood our needs from day one and delivered beyond expectations.',
    name: 'Sarah Mitchell',
    title: 'CTO',
    company: 'NovaTech Solutions',
  },
  {
    quote: 'The AI automation solutions from Mach-A reduced our operational costs by 40%. Their expertise and dedication to our success has been remarkable.',
    name: 'James Rodriguez',
    title: 'Operations Director',
    company: 'Apex Industries',
  },
  {
    quote: 'Working with Mach-A felt like having an in-house tech team. They were responsive, innovative, and truly invested in our growth journey.',
    name: 'Priya Sharma',
    title: 'Founder & CEO',
    company: 'GreenLeaf Commerce',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'What services does Mach-A offer?',
    answer: 'We offer software engineering (custom software, web apps, mobile apps), digital marketing & SEO (search optimization, content strategy, brand presence), data analytics (BI, data engineering, AI/ML), and recruitment services (IT staffing, executive search). Every service is tailored to your business goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A standard web application typically takes 8\u201312 weeks, while more complex enterprise solutions may take 3\u20136 months. We provide detailed timelines during our discovery phase.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer: 'We work with businesses of all sizes\u2014from early-stage startups to established enterprises. Our solutions are scalable and can be tailored to fit your current stage and future growth plans.',
  },
  {
    question: 'What is your development process like?',
    answer: 'Our process follows four key stages: Discovery & Strategy, Design & Prototype, Development & Testing, and Launch & Support. We maintain transparent communication throughout and involve you at every milestone.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer post-launch support and maintenance packages. This includes bug fixes, performance monitoring, security updates, and feature enhancements to ensure your solution continues to perform optimally.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We offer flexible pricing models including fixed-price projects, time-and-materials, and retainer agreements. After an initial consultation, we provide a detailed proposal with transparent pricing based on your requirements.',
  },
];
