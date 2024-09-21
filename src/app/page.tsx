import Hero from "@/components/home/hero";
import NavBar from "@/components/home/nav-bar";
import About from "@/components/home/section/about";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="max-w-7xl mx-auto relative">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}
