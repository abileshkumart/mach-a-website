import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import '../../styles/global.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content" className="app-wrapper">
        {children}
      </main>
      <Footer />
    </>
  );
}
