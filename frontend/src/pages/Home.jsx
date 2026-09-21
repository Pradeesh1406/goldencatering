
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Menu from "../components/Menu";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <Services />
      
      <AboutSection />
      {/* <Menu /> */}
      <About />
    </>
  );
}

export default Home;