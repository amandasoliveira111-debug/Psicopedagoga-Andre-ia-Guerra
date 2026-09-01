import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Philosophy from "@/components/sections/philosophy";
import Services from "@/components/sections/services";
import Environment from "@/components/sections/environment";
import Testimonials from "@/components/sections/testimonials";
import InstagramLocation from "@/components/sections/instagram-location";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import WhatsappFloating from "@/components/sections/whatsapp-floating";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Environment />
        <Testimonials />
        <InstagramLocation />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloating />
    </>
  );
}
