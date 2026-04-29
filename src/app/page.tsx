import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Works } from '@/components/sections/Works';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactModal } from '@/components/ui/ContactModal';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Services />
        <Works />
        <Testimonials />
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
