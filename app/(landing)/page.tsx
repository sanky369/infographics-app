import Image from "next/image";
import HeroSection from "./hero-section-two";
import FeaturesOne from "./features-one";
import FeaturesSection5 from "./features-5";
import FeaturesSection5Mirror from "./features-5-mirror";
import FeaturesSection52 from "./features-52";
import Testimonials from "./testimonials";
import Pricing from "./pricing-section-two";
import CallToAction from "./call-to-action";
import FAQs from "./faqs";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection5 />
      <FeaturesSection5Mirror />
      <FeaturesSection52 />
      <FeaturesOne />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <FAQs />
      <Footer />
    </div>
  );
}
