import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
