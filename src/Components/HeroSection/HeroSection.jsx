import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Route</h1>
        <p>Always by Your Side, Wherever the Road Leads.</p>
        <button
          className="cta-button"
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Scroll to About
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
