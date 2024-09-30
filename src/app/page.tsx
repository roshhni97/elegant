import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import FAQ from "./components/FAQ";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
