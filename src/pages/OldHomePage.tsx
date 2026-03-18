import Navbar       from '../sections/Navbar';
import Hero         from '../sections/Hero';
import Features     from '../sections/Features';
import Testimonials from '../sections/Testimonials';
import Pricing      from '../sections/Pricing';
import CTA          from '../sections/CTA';
import Footer       from '../sections/Footer';

export default function OldHomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
