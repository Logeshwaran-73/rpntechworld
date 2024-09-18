import './Home.css';
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import land1 from '../Assets/land1.png';
import land2 from '../Assets/land2.jpg';
import land3 from '../Assets/land.jpg';
import vector from '../Assets/Vector.png';

const Proj = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleScroll = (id) => {
    navigate(`#${id}`); // Change the URL first

    const section = document.getElementById(id);
    if (section) {
      const offset = -10; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="page-container">
      <div className="carousel-container">
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
          <div>
            <img src={land1} alt="Slide 1" />
          </div>
          <div>
            <img src={land2} alt="Slide 2" />
          </div>
          <div>
            <img src={land3} alt="Slide 3" />
          </div>
        </Carousel>
      </div>

      <div className="content-overlay">
        <nav className="navbar">
          <a href="#home" className="rpnn">
            <img src={img1} alt="logo" />
          </a>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-link homee" onClick={() => handleScroll('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#what-we-do" className="nav-link wwe" onClick={() => handleScroll('what-we-do')}>What We Do</a>
            </li>
            <li className="nav-item">
              <a href="#about-us" className="nav-link wwf" onClick={() => handleScroll('about-us')}>About Us</a>
            </li>
            <li className="nav-item">
              <a href="#career" className="nav-link" onClick={() => handleScroll('career')}>Career</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link contacte" onClick={() => handleScroll('contact')}>Contact Us</a>
            </li>
          </ul>
        </nav>

        <section id="home">
          <div className='textee'>
            WE SPECIALIZE IN
          </div>
          <div className='textee1'>
            DIGITAL SOLUTIONS
          </div>
          <div className='textee2'>
            Our emphasis on seamless conversion experiences <br />ensures that our products and services meet the<br /> highest standards of usability and satisfaction.
          </div>
          <div>
            <button className='gg' onClick={() => handleScroll('why-choose-us')}>
              Get in Touch <a className='ar'><FaArrowRight /></a>
            </button>
          </div>
          <div className='textee3'>
            EXPLORE OUR SERVICES
          </div>
        </section>

        <section id="what-we-do">
          <WhatWeDo />
        </section>

        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        <section id="about-us">
          <AboutUs />
        </section>

        <section id="career">
          <Career />
        </section>

        <section id="contact">
          <Contactus />
        </section>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Proj />} />
        <Route path="/why-choose-us" element={<Proj />} />
      </Routes>
    </Router>
  );
};

export default App;
