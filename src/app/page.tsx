import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import BeansSection from "@/components/BeansSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import SpecialtySection from "@/components/SpecialtySection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <BeansSection />
        <HowToOrderSection />
        <SpecialtySection />
        <ReviewsSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
