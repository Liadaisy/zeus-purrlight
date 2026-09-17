import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/hero/Hero";
import OriginStory from "@/components/story/OriginStory";
import Purrlight from "@/components/story/Purrlight";
import NineGifts from "@/components/story/NineGifts";
import Chatbot from "@/components/chatbot/Chatbot";
import FinalCallToAction from "@/components/story/FinalCallToAction";
import Footer from "@/components/ui/Footer";
import PetZeusWidget from "@/components/ui/PetZeusWidget";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFF8EB] text-[#35151D] selection:bg-[#D5A642] selection:text-[#FFF4DC]">
      {/* Fixed Storybook Navigation */}
      <Navigation />

      <main>
        {/* Chapter I: The Arrival (Living Illustrated World & Zeus Entrance) */}
        <Hero />

        {/* Chapter II: The Night Zeus Awoke (Origin Story) */}
        <OriginStory />

        {/* Chapter III: The Purrlight (Interactive Purr Experience) */}
        <Purrlight />

        {/* Chapter IV: The Nine Gifts (Powers & Blessings of Zeus) */}
        <NineGifts />

        {/* Chapter V: Ask Zeus (Full Conversational Help Sanctuary) */}
        <Chatbot />

        {/* Closing Sanctuary & Final Call to Action */}
        <FinalCallToAction />
      </main>

      {/* Floating Interactive Pet Zeus & Treat Widget */}
      <PetZeusWidget />

      {/* Storybook Footer */}
      <Footer />
    </div>
  );
}