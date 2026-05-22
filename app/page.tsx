import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubActivity from "@/components/GitHubActivity";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <FeaturedProjects />
      <GitHubActivity />
      <About />
      <Footer />
    </main>
  );
}
