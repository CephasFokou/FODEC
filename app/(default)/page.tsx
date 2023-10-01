export const metadata = {
  title: "Accueil - FODEC",
  description: "Page d'accueil de FODEC",
};

import FeaturesBlocks from "@/components/feature-blocks";
import Features from "@/components/features";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
    </>
  );
};

export default Home;
