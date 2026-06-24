import Bestsellers from "@/components/product/Bestsellers";
import CategorySection from "@/components/sections/Category/CategorySection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Hero from "@/components/sections/Hero/Hero";
import StatsSection from "@/components/sections/Stats/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Bestsellers />
      <CategorySection />
      <FeaturesSection />
    </>
  );
}
