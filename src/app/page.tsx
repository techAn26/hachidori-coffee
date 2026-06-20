import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import BeansSection from "@/components/BeansSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import SpecialtySection from "@/components/SpecialtySection";

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
      </main>
    </>
  );
}
