import "./AboutSection.css";

function AboutSection() {
  return (
    <div id="about" className="about">
      <div className="about-image">
        <img src="src/assets/logo.svg" alt="about" />
      </div>
      <div className="about-content">
        <h2>What&apos;s Route</h2>
        <p>
          Route is a premier vehicle transportation service provider dedicated
          to delivering exceptional roadside assistance throughout Egypt. With a
          network that spans all cities and major highways, we offer prompt,
          reliable support to ensure that you stay safe and on the move, no
          matter where your journey takes you.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
