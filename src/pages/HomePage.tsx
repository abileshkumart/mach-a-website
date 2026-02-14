import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Collaboration from '@/components/sections/Collaboration';
import HowItWorks from '@/components/sections/HowItWorks';
import Mission from '@/components/sections/Mission';
import TechStats from '@/components/sections/TechStats';
import Services from '@/components/sections/Services';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import ContactForm from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Collaboration />
      <HowItWorks />
      <Mission />
      <TechStats />
      <Services />
      <FAQ />
      <CTA />
      <ContactForm />
    </Layout>
  );
}
