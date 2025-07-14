import About from "@/components/About";
import Address from "@/components/Address";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Image
        src="/rug-flower.png"
        alt="flower"
        width={500}
        height={500}
        className="mx-auto my-15 fade-in-scroll-top"
      />
      <Menu />
      <About />
      <Address />
      <Footer />
    </div>
  );
}
