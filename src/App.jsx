import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import MotionBackground from "./components/MotionBackground";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import PerformanceMetrics from "./components/PerformanceMetrics";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative z-10">
      <MotionBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <PerformanceMetrics />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
