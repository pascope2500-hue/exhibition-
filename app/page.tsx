import Consultancy from "@/components/consultancyCard"
import ExhibitionsEvents from "@/components/exhbitionEvent"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PremierSection from "@/components/premier-section"
import ReviewCard from "@/components/reviewCard"
import WhoWeAre from "@/components/who-we-are"
import WhyUs from "@/components/whyUs"
export default function Home() {
  return (
    <main className="min-h-screen">
    
      {/* <Hero /> */}
      <PremierSection />
      <WhoWeAre />

      <ExhibitionsEvents/>
      <ReviewCard/>
      <WhyUs/>
    </main>
  )
}
