import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OurHeart from "@/components/sections/OurHeart";
import WorshipSessions from "@/components/sections/WorshipSessions";
import Community from "@/components/sections/Community";
import Gathering from "@/components/sections/Gathering";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurHeart />
        <WorshipSessions />
        <Community />
        <Gathering />
      </main>
      <Footer />
    </>
  );
}
