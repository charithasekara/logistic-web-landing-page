import WelcomeSection from "@/components/Welcome";
import HeroSection from "../components/HeroSection";
import OurServices from "@/components/OurServices";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection"
import ClientLogosSection from "@/components/ClientLogosSection"
import NewsPage from "@/components/NewsPage";


export default function Page() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection/>
      <OurServices/>
      <StatsSection/>
      <TestimonialsSection/>
      <ClientLogosSection/>
      <NewsPage/>
    </div>
  );
}