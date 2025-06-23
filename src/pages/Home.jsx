import ContactLinks from '../components/ContactLinks';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container d-flex flex-column align-items-center justify-content-center text-center ">
      <div className="">
        <p className="intro-text">Hi, my name is</p>
        <h1 className="display-4 fw-bold">Tofara Denzel Chimoto</h1>
        <h2 className="subtitle mb-4">I build systems and architectures.</h2>
        <p className="description">
          I'm a computer engineer specializing in building and designing exceptional digital experiences.
        </p>
        <a className="btn btn-outline-success mt-4" href="mailto:chimototofara@gmail.com">Email Me </a>
      </div>

      {/* ContactLinks footer */}
      <ContactLinks />
    </div>
  );
}

export default Home;
