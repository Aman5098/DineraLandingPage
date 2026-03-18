import LandingNavbar      from '../components/landing/LandingNavbar';
import LandingHero        from '../components/landing/LandingHero';
import LandingProblem     from '../components/landing/LandingProblem';
import LandingSolution    from '../components/landing/LandingSolution';
import LandingHowItWorks from '../components/landing/LandingHowItWorks';
import LandingFeatures    from '../components/landing/LandingFeatures';
import LandingWhyUs       from '../components/landing/LandingWhyUs';
import LandingDemoCTA     from '../components/landing/LandingDemoCTA';
import LandingTestimonials from '../components/landing/LandingTestimonials';
import LandingPricing     from '../components/landing/LandingPricing';
import LandingFinalCTA    from '../components/landing/LandingFinalCTA';
import LandingFooter      from '../components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased overflow-x-hidden">
      <LandingNavbar />
      <main>
        <LandingHero />
        <LandingProblem />
        <LandingSolution />
        <LandingHowItWorks />
        <LandingFeatures />
        <LandingWhyUs />
        <LandingDemoCTA />
        <LandingTestimonials />
        <LandingPricing />
        <LandingFinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
