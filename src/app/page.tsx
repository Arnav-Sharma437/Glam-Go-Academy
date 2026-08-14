import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import CoursesOverview from "@/components/CoursesOverview";
import WhyTrain from "@/components/WhyTrain";
import PlacementSupport from "@/components/PlacementSupport";
import Testimonials from "@/components/Testimonials";
import EnrolCTA from "@/components/EnrolCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <CoursesOverview />
        <WhyTrain />
        <PlacementSupport />
        <Testimonials />
        <EnrolCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
