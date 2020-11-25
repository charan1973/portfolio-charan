import Courses from "../components/portfolio/courses";
import Projects from "../components/portfolio/projects";
import Skills from "../components/portfolio/skills";
import Social from "../components/portfolio/social";

function Portfolio() {
  document.title = "Portfolio"
  return (
    <div className="container">
      <main>
        <Social />
        <Skills />
        <Courses />
        <Projects />
      </main>
    </div>
  );
}

export default Portfolio;
