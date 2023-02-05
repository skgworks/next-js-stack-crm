import Hero from "./hero";
import Companies from "./companies";
import Features from "./features";
import SocialProof from "./socialProof";
import Testimonials from "./testimonials";
import Pricing from "./pricing";
import FAQ from "./faq";
import Trail from "./trail";
import Header from "./header";

export default function Landing() {
  return (
    <div className="w-full flex flex-col box-border">
      <Header />
      <Hero />
      <Companies />
      <Features />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Trail />
    </div>
  );
}
