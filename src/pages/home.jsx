import Footer from "../components/core/footer"
import charan from "../assets/charan.jpeg"

function Home() {
  document.title = "Charan Vasu"
  return (
    <div className="container">
      <main>
        <div id="description">
          <img src={charan} alt="avatar" />
          <div class="about">
            <div>
              <h2>Charan Vasu</h2>
              <p>Senior Year College Student</p>
            </div>
            <div>
              <h4>About Me</h4>
              <p>
                A driven and ambitious tech enthusiast who loves tech starting
                from a young age. To take up tech as my career, I chose to learn
                to program. My primary focus is on MERN, which is a full-stack
                web development technology fully based on Javascript.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;