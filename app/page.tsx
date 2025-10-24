import Hero from '@/components/Hero'
import KeyBenefits from '@/components/KeyBenefits'
import HowItWorks from '@/components/HowItWorks'
import FeatureHighlights from '@/components/FeatureHighlights'
import TrustSection from '@/components/TrustSection'
import SocialProof from '@/components/SocialProof'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <KeyBenefits />
      <HowItWorks />
      <FeatureHighlights />
      <TrustSection />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
