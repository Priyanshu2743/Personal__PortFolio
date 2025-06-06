const DesignerPortfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="left-section">
        <p className="intro-text animated-fade-in-down">Hey. I'm Priyanshu,</p>
        <h1 className="main-heading">
          <span className="animated-slide-in-left delay-1">A UI/UX</span>
          <span className="animated-slide-in-left delay-2">& Software</span>
          <span className="animated-slide-in-left delay-3">Developer</span>
        </h1>
        <p className="description-text animated-fade-in-up delay-4">
          Transforming ideas into stunning visuals – UI/UX and brand design
          that captivates, engages, and delivers results.
        </p>
        <button className="contact-button animated-fade-in-up delay-5">
          CONTACT ME 
          {/* <FaArrowRight className="arrow-icon" /> */}
        </button>
      </div>
      <div className="right-section">
        <div className="image-wrapper animated-fade-in">
          {/* Replace with your actual image path */}
          <img
            src="/Assets/img/Portfolio/Resume2.png" 
            alt="Solt - UI/UX & Brand Designer"
            className="designer-image"
          />
        </div>
        <div className="stats-container">
          <div className="stat-item animated-fade-in-right delay-1">
            <p className="stat-number">15+</p>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-item animated-fade-in-right delay-2">
            <p className="stat-number">280+</p>
            <p className="stat-label">Projects Delivered</p>
          </div>
          <div className="stat-item animated-fade-in-right delay-3">
            <p className="stat-number">*99%</p>
            <p className="stat-label">Client Satisfaction</p>
          </div>
          <div className="stat-item animated-fade-in-right delay-4">
            <p className="stat-number">50</p>
            <p className="stat-label">Clients worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerPortfolio;
